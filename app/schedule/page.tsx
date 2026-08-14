"use client";

import React, { useState } from "react";

const roles = {
  H: {
    name: "Host",
    emoji: "\u{1F3A4}",
    description: "The host - leads the event",
  },
  W: {
    name: "Welcome",
    emoji: "\u{1F44B}",
    description: "Welcoming guests, checking in, managing intercom",
  },
  S: {
    name: "Slides",
    emoji: "\u{1F4CA}",
    description: "Collecting slides, timekeeping, managing the screen",
  },
  D: {
    name: "Drinks",
    emoji: "\u{1F37A}",
    description: "Responsible for drinks throughout the event",
  },
  F: {
    name: "Food",
    emoji: "\u{1F355}",
    description: "Responsible for food and snacks",
  },
  P: {
    name: "Photo",
    emoji: "\u{1F4F8}",
    description: "Capturing moments throughout the event",
  },
  M: {
    name: "Music",
    emoji: "\u{1F3B5}",
    description: "Managing music and lights",
  },
};

type RoleKey = keyof typeof roles;

type ScheduleItem = {
  role: RoleKey;
  time: string;
  action: string;
  phase: "setup" | "arrival" | "main" | "break" | "closing";
  subtasks?: string[];
};

const schedule: ScheduleItem[] = [
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
    subtasks: [
      "Ask everyone to join the WhatsApp group",
      "Ask for feedback",
      "Ask who wants to host the next 2 sessions",
      "Ask what the right date is for the next event",
    ],
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
    action: "If less than 5 people book → cancel event",
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

const phaseStyles: Record<string, { container: string; dark: boolean }> = {
  setup: { container: "bg-neutral-100", dark: false },
  arrival: { container: "bg-neutral-200", dark: false },
  main: { container: "bg-black text-white", dark: true },
  break: {
    container: "bg-neutral-100 border border-dashed border-neutral-400",
    dark: false,
  },
  closing: { container: "bg-white border-2 border-black", dark: false },
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
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 border-b-2 border-black pb-8">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Attic 98
          </h1>
          <p className="text-neutral-500 text-sm uppercase tracking-[0.3em]">
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
                  className={`px-4 py-3 rounded-xl font-medium transition-all transform hover:scale-105 border-2 ${
                    selectedRole === key
                      ? "bg-black text-white border-black shadow-lg"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                  }`}
                >
                  <span className="text-xl mr-2">{role.emoji}</span>
                  {role.name}
                </button>
              )
            )}
            <button
              onClick={() => setSelectedRole(null)}
              className={`px-4 py-3 rounded-xl font-medium transition-all border-2 ${
                selectedRole === null
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
              }`}
            >
              {"\u{1F4CB}"} All Roles
            </button>
          </div>
        </div>

        {/* Selected Role Card */}
        {selectedRole && (
          <div className="mb-8 p-6 rounded-2xl bg-black text-white shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{roles[selectedRole].emoji}</span>
              <div>
                <h3 className="text-2xl font-bold">
                  {roles[selectedRole].name}
                </h3>
                <p className="text-white/70">
                  {roles[selectedRole].description}
                </p>
              </div>
            </div>

            {/* Tasks for this role */}
            <div className="bg-white/10 rounded-xl p-4 mt-4">
              <h4 className="font-semibold mb-3">Your Tasks:</h4>
              {getTasksForRole(selectedRole).pre.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wide text-white/50">
                    Before Event
                  </span>
                  {getTasksForRole(selectedRole).pre.map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0"
                    >
                      <span className="text-sm font-mono bg-white/15 px-2 py-1 rounded">
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
                  className="py-2 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono bg-white/15 px-2 py-1 rounded">
                      {task.time}
                    </span>
                    <span>{task.action}</span>
                  </div>
                  {task.subtasks && (
                    <ul className="mt-2 ml-4 space-y-1 list-disc list-inside text-white/70 text-sm">
                      {task.subtasks.map((subtask, j) => (
                        <li key={j}>{subtask}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {getTasksForRole(selectedRole).continuous && (
                <div className="flex items-center gap-3 py-2 mt-2 bg-white/10 rounded-lg px-3">
                  <span className="text-sm font-mono bg-white/15 px-2 py-1 rounded">
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
        <div className="mb-8 bg-white border-2 border-black rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"\u{1F4C5}"} Before the Event
          </h2>
          <div className="space-y-3">
            {preEvent.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-lg bg-neutral-50 border border-neutral-200 ${
                  selectedRole &&
                  item.owner !== selectedRole &&
                  item.owner !== "Organizer"
                    ? "opacity-30"
                    : ""
                }`}
              >
                <span className="font-mono text-sm bg-black text-white px-3 py-1 rounded-full whitespace-nowrap">
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
        <div className="mb-8 bg-white border-2 border-black rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"\u{1F3AF}"} Event Day Timeline
          </h2>

          {/* Continuous roles banner */}
          <div className="mb-4 p-4 bg-neutral-100 border border-neutral-300 rounded-xl">
            <p className="text-sm text-neutral-600 mb-2">Always active:</p>
            <div className="flex flex-wrap gap-3">
              {continuousRoles.map((item, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/20 ${
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
            {schedule.map((item, i) => {
              const style = phaseStyles[item.phase];
              return (
                <div
                  key={i}
                  className={`p-3 rounded-lg transition-all ${style.container} ${
                    selectedRole && selectedRole !== item.role
                      ? "opacity-20"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm px-3 py-1 rounded-full whitespace-nowrap min-w-[120px] text-center ${
                        style.dark ? "bg-white/15" : "bg-black/10"
                      }`}
                    >
                      {item.time}
                    </span>
                    <span className="text-2xl">{roles[item.role].emoji}</span>
                    <span className="flex-1">{item.action}</span>
                  </div>
                  {item.subtasks && (
                    <ul
                      className={`mt-2 ml-[152px] space-y-1 list-disc list-inside text-sm ${
                        style.dark ? "text-white/70" : "text-neutral-600"
                      }`}
                    >
                      {item.subtasks.map((subtask, j) => (
                        <li key={j}>{subtask}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Post-Event */}
        <div className="bg-white border-2 border-black rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {"✅"} After the Event
          </h2>
          <div className="space-y-3">
            {postEvent.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg bg-neutral-50 border border-neutral-200"
              >
                <span className="font-mono text-sm bg-black text-white px-3 py-1 rounded-full whitespace-nowrap">
                  {item.time}
                </span>
                <span className="flex-1">{item.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 mt-8 text-sm">
          Questions? Reach out in the organizer group chat {"\u{1F4AC}"}
        </p>
      </div>
    </div>
  );
}
