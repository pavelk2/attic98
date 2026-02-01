"use client";

import React, { useState } from "react";

const roles = {
  H: {
    name: "Host",
    emoji: "\u{1F3A4}",
    color: "from-purple-500 to-purple-700",
    description: "The host - leads the event",
  },
  W: {
    name: "Welcome",
    emoji: "\u{1F44B}",
    color: "from-green-500 to-green-700",
    description: "Welcoming guests, checking in, managing intercom",
  },
  S: {
    name: "Slides",
    emoji: "\u{1F4CA}",
    color: "from-blue-500 to-blue-700",
    description: "Collecting slides, timekeeping, managing the screen",
  },
  D: {
    name: "Drinks",
    emoji: "\u{1F37A}",
    color: "from-amber-500 to-amber-700",
    description: "Responsible for drinks throughout the event",
  },
  F: {
    name: "Food",
    emoji: "\u{1F355}",
    color: "from-red-500 to-red-700",
    description: "Responsible for food and snacks",
  },
  P: {
    name: "Photo",
    emoji: "\u{1F4F8}",
    color: "from-pink-500 to-pink-700",
    description: "Capturing moments throughout the event",
  },
  M: {
    name: "Music",
    emoji: "\u{1F3B5}",
    color: "from-indigo-500 to-indigo-700",
    description: "Managing music and lights",
  },
};

type RoleKey = keyof typeof roles;

const schedule = [
  {
    role: "H" as RoleKey,
    time: "4:00 - 4:30pm",
    action: "Prepare the space",
    phase: "setup" as const,
  },
  {
    role: "F" as RoleKey,
    time: "4:30 - 5:00pm",
    action: "Purchase snacks & drinks",
    phase: "setup" as const,
  },
  {
    role: "S" as RoleKey,
    time: "5:00 - 6:00pm",
    action:
      "Prepare screen/laptop/clicker, collect presentations, choose lineup",
    phase: "setup" as const,
  },
  {
    role: "W" as RoleKey,
    time: "5:00 - 6:00pm",
    action: "Welcome & check in guests",
    phase: "arrival" as const,
  },
  {
    role: "H" as RoleKey,
    time: "6:00 - 6:20pm",
    action: "Opening of the conference & introductions",
    phase: "main" as const,
  },
  {
    role: "S" as RoleKey,
    time: "6:30 - 7:00pm",
    action: "First batch of presentations",
    phase: "main" as const,
  },
  {
    role: "F" as RoleKey,
    time: "7:00 - 7:40pm",
    action: "Serve food",
    phase: "break" as const,
  },
  {
    role: "S" as RoleKey,
    time: "8:00pm",
    action: "Second batch of presentations",
    phase: "main" as const,
  },
  {
    role: "H" as RoleKey,
    time: "8:30 - 9:00pm",
    action: "Closing session & asking for feedback",
    phase: "closing" as const,
  },
  {
    role: "F" as RoleKey,
    time: "9:00pm",
    action: "Clean up",
    phase: "closing" as const,
  },
];

const continuousRoles = [
  { role: "P" as RoleKey, action: "Photography throughout the event" },
  { role: "D" as RoleKey, action: "Serving drinks throughout the event" },
  {
    role: "M" as RoleKey,
    action: "Managing music and lights throughout the event",
  },
];

const preEvent = [
  {
    time: "T-3 weeks",
    action: "Event announced, host selected",
    owner: "Organizer",
  },
  {
    time: "T-1 week",
    action: "If less than 5 people book \u2192 cancel event",
    owner: "Organizer",
  },
  {
    time: "T-4 days",
    action: "Create organizer group chat, assign roles",
    owner: "Organizer",
  },
  {
    time: "T-1 day",
    action: "Order pizza if necessary",
    owner: "F",
  },
];

const postEvent = [
  { time: "T+1 day", action: "Settle expenses" },
  { time: "T+3 days", action: "Share email with highlights, learnings & photos" },
  { time: "T+7 days", action: "Announce the next event" },
];

const phaseColors: Record<string, string> = {
  setup: "bg-slate-700",
  arrival: "bg-green-900",
  main: "bg-blue-900",
  break: "bg-amber-900",
  closing: "bg-purple-900",
};

export default function Attic98Guide() {
  const [selectedRole, setSelectedRole] = useState<RoleKey | null>(null);

  const getTasksForRole = (roleKey: RoleKey) => {
    const scheduled = schedule.filter((s) => s.role === roleKey);
    const continuous = continuousRoles.find((c) => c.role === roleKey);
    const pre = preEvent.filter((p) => p.owner === roleKey);
    return { scheduled, continuous, pre };
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Attic 98</h1>
          <p className="text-slate-400 text-lg">
            Monthly Friends for Friends Conference
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {"\u{1F464}"} Select Your Role
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.entries(roles) as [RoleKey, (typeof roles)[RoleKey]][]).map(
              ([key, role]) => (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedRole(selectedRole === key ? null : key)
                  }
                  className={`px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                    selectedRole === key
                      ? `bg-gradient-to-r ${role.color} shadow-lg`
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  <span className="text-xl mr-2">{role.emoji}</span>
                  {role.name}
                </button>
              )
            )}
            <button
              onClick={() => setSelectedRole(null)}
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                selectedRole === null
                  ? "bg-white text-slate-900"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {"\u{1F4CB}"} All Roles
            </button>
          </div>
        </div>

        {/* Selected Role Card */}
        {selectedRole && (
          <div
            className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${roles[selectedRole].color} shadow-xl`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{roles[selectedRole].emoji}</span>
              <div>
                <h3 className="text-2xl font-bold">
                  {roles[selectedRole].name}
                </h3>
                <p className="text-white/80">
                  {roles[selectedRole].description}
                </p>
              </div>
            </div>

            {/* Tasks for this role */}
            <div className="bg-black/20 rounded-xl p-4 mt-4">
              <h4 className="font-semibold mb-3">Your Tasks:</h4>
              {getTasksForRole(selectedRole).pre.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wide text-white/60">
                    Before Event
                  </span>
                  {getTasksForRole(selectedRole).pre.map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0"
                    >
                      <span className="text-sm font-mono bg-black/30 px-2 py-1 rounded">
                        {task.time}
                      </span>
                      <span>{task.action}</span>
                    </div>
                  ))}
                </div>
              )}
              {getTasksForRole(selectedRole).scheduled.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0"
                >
                  <span className="text-sm font-mono bg-black/30 px-2 py-1 rounded">
                    {task.time}
                  </span>
                  <span>{task.action}</span>
                </div>
              ))}
              {getTasksForRole(selectedRole).continuous && (
                <div className="flex items-center gap-3 py-2 mt-2 bg-white/10 rounded-lg px-3">
                  <span className="text-sm font-mono bg-black/30 px-2 py-1 rounded">
                    Always
                  </span>
                  <span>
                    {getTasksForRole(selectedRole).continuous!.action}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pre-Event Checklist */}
        <div className="mb-8 bg-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"\u{1F4C5}"} Before the Event
          </h2>
          <div className="space-y-3">
            {preEvent.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-lg bg-slate-700/50 ${
                  selectedRole &&
                  item.owner !== selectedRole &&
                  item.owner !== "Organizer"
                    ? "opacity-30"
                    : ""
                }`}
              >
                <span className="font-mono text-sm bg-slate-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.time}
                </span>
                <span className="flex-1">{item.action}</span>
                {item.owner !== "Organizer" && (
                  <span className="text-xl">
                    {roles[item.owner as RoleKey]?.emoji}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Event Day Timeline */}
        <div className="mb-8 bg-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"\u{1F3AF}"} Event Day Timeline
          </h2>

          {/* Continuous roles banner */}
          <div className="mb-4 p-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl">
            <p className="text-sm text-slate-300 mb-2">Always active:</p>
            <div className="flex flex-wrap gap-3">
              {continuousRoles.map((item, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 ${
                    selectedRole && selectedRole !== item.role
                      ? "opacity-30"
                      : ""
                  }`}
                >
                  <span>{roles[item.role].emoji}</span>
                  <span className="text-sm">{roles[item.role].name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Scheduled tasks */}
          <div className="space-y-2">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all ${phaseColors[item.phase]} ${
                  selectedRole && selectedRole !== item.role
                    ? "opacity-20"
                    : ""
                }`}
              >
                <span className="font-mono text-sm bg-black/30 px-3 py-1 rounded-full whitespace-nowrap min-w-[120px] text-center">
                  {item.time}
                </span>
                <span className="text-2xl">{roles[item.role].emoji}</span>
                <span className="flex-1">{item.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Event */}
        <div className="bg-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"\u2705"} After the Event
          </h2>
          <div className="space-y-3">
            {postEvent.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg bg-slate-700/50"
              >
                <span className="font-mono text-sm bg-slate-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.time}
                </span>
                <span className="flex-1">{item.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-8 text-sm">
          Questions? Reach out in the organizer group chat {"\u{1F4AC}"}
        </p>
      </div>
    </div>
  );
}
