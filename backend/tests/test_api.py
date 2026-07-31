import os
import unittest

os.environ["DATABASE_URL"] = "sqlite:///:memory:"

from werkzeug.security import generate_password_hash
from app import app, db
from app.models import User

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

if __name__ == '__main__':
    unittest.main()
