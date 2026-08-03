import os
import unittest

os.environ["DATABASE_URL"] = "sqlite:///:memory:"

from werkzeug.security import generate_password_hash
from app import app, db
from app.models import Application, Request, Skill, User

class ApiTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        with app.app_context():
            db.drop_all()
            db.create_all()
            user = User(username="tester", email="tester@example.com", password_hash=generate_password_hash("secret123"))
            db.session.add(user)
            db.session.commit()

    def test_health_endpoint(self):
        response = self.app.get('/health')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()['status'], 'ok')

    def test_register_endpoint(self):
        response = self.app.post('/auth/register', json={
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'secret123'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn('user', response.get_json())

    def test_login_endpoint(self):
        response = self.app.post('/auth/login', json={
            'email': 'tester@example.com',
            'password': 'secret123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('token', response.get_json())

    def test_activity_endpoint_returns_only_current_user_activity(self):
        with app.app_context():
            other_user = User(username="other", email="other@example.com", password_hash=generate_password_hash("secret123"))
            skill = Skill(name="Tutoring", description="Help with studies", category="Education")
            db.session.add_all([other_user, skill])
            db.session.flush()

            other_request = Request(title="Need tutoring", description="A request from someone else", user_id=other_user.id, skill_id=skill.id)
            db.session.add(other_request)
            db.session.flush()

            current_user = User.query.filter_by(email="tester@example.com").first()
            own_request = Request(title="Need groceries", description="A request from me", user_id=current_user.id, skill_id=skill.id)
            application = Application(opportunity_id="req-1", opportunity_title="Need tutoring", message="I can help", user_id=current_user.id)
            db.session.add_all([own_request, application])
            db.session.commit()

        login_response = self.app.post('/auth/login', json={
            'email': 'tester@example.com',
            'password': 'secret123'
        })
        token = login_response.get_json()['token']

        response = self.app.get('/activity', headers={'Authorization': f'Bearer {token}'})

        self.assertEqual(response.status_code, 200)
        titles = [item['title'] for item in response.get_json()]
        self.assertIn('Need groceries', titles)
        self.assertIn('Need tutoring', titles)
        self.assertEqual(len(titles), 2)

    def test_activity_endpoint_returns_empty_list_for_new_user(self):
        login_response = self.app.post('/auth/login', json={
            'email': 'tester@example.com',
            'password': 'secret123'
        })
        token = login_response.get_json()['token']

        response = self.app.get('/activity', headers={'Authorization': f'Bearer {token}'})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), [])

    def test_profile_update_endpoint_persists_profile_details(self):
        register_response = self.app.post('/auth/register', json={
            'username': 'profileuser',
            'email': 'profileuser@example.com',
            'password': 'secret123'
        })
        self.assertEqual(register_response.status_code, 201)
        created_user = register_response.get_json()['user']

        login_response = self.app.post('/auth/login', json={
            'email': 'profileuser@example.com',
            'password': 'secret123'
        })
        token = login_response.get_json()['token']

        response = self.app.put(
            f"/users/{created_user['id']}",
            headers={'Authorization': f'Bearer {token}'},
            json={
                'username': 'Profile User',
                'location': 'Nairobi',
                'bio': 'I love helping communities.',
                'skills': 'Python,Volunteer'
            }
        )

        self.assertEqual(response.status_code, 200)
        profile = response.get_json()
        self.assertEqual(profile['location'], 'Nairobi')
        self.assertEqual(profile['bio'], 'I love helping communities.')
        self.assertTrue(profile['profile_completed'])
        self.assertEqual(profile['skills'], ['Python', 'Volunteer'])

if __name__ == '__main__':
    unittest.main()
