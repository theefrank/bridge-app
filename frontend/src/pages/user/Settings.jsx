import { useState, useEffect } from "react";
import {
  User,
  Bell,
  Shield,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ChangePasswordDialog from "../../components/settings/ChangePasswordDialog";
import api from "../../services/api";

import { Button } from "../../components/ui/button";

import { Card } from "../../components/ui/card";

import { Switch } from "../../components/ui/switch";

import { Separator } from "../../components/ui/separator";

import { toast } from "sonner";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

export default function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);

  const [applicationUpdates, setApplicationUpdates] =
    useState(true);

  const [requestUpdates, setRequestUpdates] =
    useState(true);

  const { logout } = useAuth();  

  const [settings, setSettings] = useState({
    email_notifications: true,
    application_updates: true,
    request_updates: true,
  });

  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);

  async function saveSettings() {
    try {

        await api.put("/settings", settings);

        toast.success("Settings updated!");

    } catch (error) {
      console.error(error);
      console.error(error.response);
      console.error(error.response?.data);

      toast.error(
        error.response?.data?.error || "Could not update settings."
      );
    }
  }

  async function handleDeleteAccount() {
  try {
    await api.delete("/account");

    toast.success("Your account has been deleted.");

    logout();

    navigate("/", { replace: true });

  } catch (error) {
    toast.error(
      error.response?.data?.error ||
      "Could not delete account."
    );
  }
  }

  useEffect(() => {
  async function loadSettings() {
    try {
      const response = await api.get("/settings");
      setSettings(response.data);
    } catch (error) {
      console.error(error);
      console.error(error.response);
      console.error(error.response?.data);

      toast.error(
        error.response?.data?.error ||
        "Could not delete account."
      );
    }
  }

  loadSettings();
}, []);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#FAF7F2] p-8">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-6">

          {/* Account */}

          <Card className="bridge-card">

            <div className="flex items-center gap-3 mb-6">

              <User className="text-[#6B8F71]" />

              <h2 className="text-2xl font-semibold">
                Account
              </h2>

            </div>

            <div className="space-y-5">

              <div>

                <p className="text-sm text-gray-500">
                  Profile
                </p>

                <Button
                  className="mt-2"
                  onClick={() => navigate("/profile/edit")}
                >
                  Edit Profile
                </Button>

              </div>

              <Separator />

              <div>

                <p className="text-sm text-gray-500">
                  Password
                </p>

                <Button
                  variant="outline"
                  onClick={() => setPasswordDialogOpen(true)}
                >
                  Change Password
                </Button>

              </div>

            </div>

          </Card>

          {/* Notifications */}

          <Card className="bridge-card">

            <div className="flex items-center gap-3 mb-6">

              <Bell className="text-[#D08C60]" />

              <h2 className="text-2xl font-semibold">
                Notifications
              </h2>

            </div>

            <div className="space-y-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="font-medium">
                    Email Notifications
                  </p>

                  <p className="text-sm text-gray-500">
                    Receive emails from Bridge
                  </p>

                </div>

                <Switch
                  checked={settings.email_notifications}
                  onCheckedChange={(value) =>
                    setSettings({
                      ...settings,
                      email_notifications: value,
                    })
                  }
                />

              </div>

              <Separator />

              <div className="flex justify-between items-center">

                <div>

                  <p className="font-medium">
                    Application Updates
                  </p>

                  <p className="text-sm text-gray-500">
                    Get notified when your application changes.
                  </p>

                </div>

                <Switch
                  checked={settings.application_updates}
                  onCheckedChange={(value) =>
                    setSettings({
                      ...settings,
                      application_updates: value,
                    })
                  }
                />

              </div>

              <Separator />

              <div className="flex justify-between items-center">

                <div>

                  <p className="font-medium">
                    Request Updates
                  </p>

                  <p className="text-sm text-gray-500">
                    Receive updates on your requests.
                  </p>

                </div>

                <Switch
                  checked={settings.request_updates}
                  onCheckedChange={(value) =>
                    setSettings({
                      ...settings,
                      request_updates: value,
                    })
                  }
                />

              </div>

            </div>

          </Card>

          {/* Security */}

          <Card className="bridge-card border-red-200">

            <div className="flex items-center gap-3 mb-6">

              <Shield className="text-red-500" />

              <h2 className="text-2xl font-semibold">
                Security
              </h2>

            </div>

            <div className="flex flex-wrap gap-4">

              <Button
                variant="outline"
                onClick={logout}
              >
                Logout
              </Button>

              <AlertDialog>

                <AlertDialogTrigger asChild>

                  <Button variant="destructive">
                    Delete Account
                  </Button>

                </AlertDialogTrigger>

                <AlertDialogContent>

                  <AlertDialogHeader>

                    <AlertDialogTitle>
                      Delete Account?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                      This action cannot be undone.
                      Your account, requests and applications will
                      be permanently deleted.
                    </AlertDialogDescription>

                  </AlertDialogHeader>

                  <AlertDialogFooter>

                    <AlertDialogCancel>
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                      className="bg-red-600 hover:bg-red-700"
                      onClick={handleDeleteAccount}
                    >
                      Delete Account
                    </AlertDialogAction>

                  </AlertDialogFooter>

                </AlertDialogContent>

              </AlertDialog>

            </div>

          </Card>

          <div className="flex justify-end">

            <Button
              onClick={saveSettings}
            >
              Save Changes
            </Button>

          </div>

        </div>

      </div>

      <ChangePasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
      />

    </DashboardLayout>
  );
}