import { Link, Redirect } from "expo-router";
import React from "react";
import '../global.css'

export default function Page() {
  return (
    <Redirect href="/onboarding" />
  );
}

