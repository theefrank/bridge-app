import { useState } from "react";
import NotificationSettings from "./NotificationSettings";
import AppearanceSettings from "./AppearanceSettings";
import SecuritySettings from "./SecuritySettings";

export default function SettingsForm() {

  const [settings, setSettings] = useState({
    emailNotifications: true,
    volunteerUpdates: true,
    newsletter: false,
    language: "English",
    theme: "Light",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckbox(e) {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked,
    });
  }

  function validate() {

    const newErrors = {};

    if (
      settings.password &&
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/.test(
        settings.password
      )
    ) {
      newErrors.password =
        "Minimum 8 characters with letters, numbers and special characters.";
    }

    if (
      settings.password !==
      settings.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (!validate()) return;

    console.log(settings);

    alert("Settings saved!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <NotificationSettings
        settings={settings}
        handleCheckbox={handleCheckbox}
      />

      <AppearanceSettings
        settings={settings}
        handleChange={handleChange}
      />

      <SecuritySettings
        settings={settings}
        handleChange={handleChange}
        errors={errors}
      />

      <button
        className="btn-primary"
      >
        Save Changes
      </button>

    </form>
  );
}