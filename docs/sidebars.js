module.exports = {
  docs: {
    "Getting Started": [
      "intro",
      "hardware",
      "faq",
      "user-setup",
      "customization",
      "troubleshooting",
    ],
    Features: [
      "features/keymaps",
      "features/combos",
      "features/conditional-layers",
      "features/debouncing",
      "features/displays",
      "features/encoders",
      "features/underglow",
      "features/backlight",
      "features/battery",
      "features/beta-testing",
    ],
    Behaviors: [
      "behaviors/key-press",
      "behaviors/layers",
      "behaviors/misc",
      "behaviors/hold-tap",
      "behaviors/mod-tap",
      "behaviors/mod-morph",
      "behaviors/macros",
      "behaviors/sticky-key",
      "behaviors/sticky-layer",
      "behaviors/tap-dance",
      "behaviors/caps-word",
      "behaviors/mouse-emulation",
      "behaviors/key-repeat",
      "behaviors/reset",
      "behaviors/bluetooth",
      "behaviors/outputs",
      "behaviors/underglow",
      "behaviors/backlight",
      "behaviors/power",
    ],
    Codes: [
      "codes/index",
      "codes/keyboard-keypad",
      "codes/modifiers",
      "codes/editing",
      "codes/media",
      "codes/applications",
      "codes/input-assist",
      "codes/power",
      "codes/keymap-upgrader",
    ],
    Development: [
      "development/clean-room",
      "development/documentation",
      "development/setup",
      "development/build-flash",
      "development/boards-shields-keymaps",
      "development/posix-board",
      "development/tests",
      "development/usb-logging",
      "development/ide-integration",
      {
        type: "category",
        label: "Guides",
        collapsed: false,
        items: [
          "development/new-shield",
          "development/hardware-metadata-files",
        ],
      },
    ],
  },
};
