/* =============================================
   PROJECTS DATA — Pragadeesh B · ECE 2026
   =============================================
   HOW TO ADD YOUR PHOTO:
   - Place image inside assets/ folder
   - Set photo: "assets/your-filename.jpg"
   - For p4 and p6 set photo2: "assets/second-photo.jpg"
   - Leave as null to show placeholder
   ============================================= */

const PROJECTS = {

  p1: {
    num: "P01",
    title: "Smart Energy Meter with Overload Indication",
    category: "Embedded Systems · Power Electronics",
    photo: "assets/p1-energy-meter.jpg",
    photo2: null,
    overview:
      "A microcontroller-based smart energy monitoring system that provides real-time power consumption data directly on an LCD display. The system is equipped with SMS-based alert capabilities, overload detection with a customisable threshold, power theft detection, and an audible alarm — making it a complete embedded solution for residential and small commercial electrical safety.",
    features: [
      "Real-time energy usage monitoring displayed live on LCD — voltage, current & power units",
      "SMS alerts sent to the user for energy consumption updates and threshold breach notifications",
      "Overload indication with a customisable threshold voltage for flexible deployment",
      "Power theft detection with instant SMS alerts and on-display notifications",
      "Audible buzzer alarm triggered on overload or power theft events for immediate attention",
      "Standalone embedded firmware — no external computer or cloud dependency required"
    ],
    tags: ["Embedded C", "Microcontroller", "LCD Display", "SMS Module", "Current Sensor", "Voltage Sensor", "Buzzer", "Power Theft Detection"],
    outcome: "Presented at National Level Project Expo — received recognition for practical applicability in household energy management and electrical security. Fully functional hardware prototype built, tested and demonstrated successfully."
  },

  p2: {
    num: "P02",
    title: "Line Follower Bot + Bluetooth RC Control",
    category: "Robotics · Embedded Systems",
    photo: "assets/p2-line-follower.jpg",
    photo2: null,
    overview:
      "Designed and built a versatile dual-mode robotics system that functions both as a line-following autonomous robot and a Bluetooth-controlled RC car. This project showcases hands-on experience with ESP8266/ESP32 microcontrollers, precise motor driver control, sensor integration, and GPIO optimisation — all in a single compact platform.",
    features: [
      "Seamless software mode-switching between autonomous line-follow and manual Bluetooth RC control",
      "Optimised IR sensor feedback array for accurate and reliable line tracking on various surfaces",
      "Mobile-based Bluetooth control using a custom interface — no third-party apps required",
      "ESP8266/ESP32 microcontroller with efficient GPIO management for dual-mode operation",
      "L298N motor driver for independent left/right wheel speed and direction control",
      "Future expansion ready: ultrasonic sensor integration planned for smart obstacle detection and avoidance"
    ],
    tags: ["ESP8266", "ESP32", "IR Sensors", "WiFi & BT", "L298N Motor Driver", "PWM", "GPIO", "Robotics", "Embedded C"],
    outcome: "Fully functional dual-mode robot prototype. Demonstrated smooth autonomous line tracking and real-time Bluetooth remote switching. Used as a hands-on demonstration unit for school students during IoT & Robotics training sessions."
  },

  p3: {
    num: "P03",
    title: "Smart Guardian Hub",
    category: "IoT · Advanced Home Safety",
    photo: null,   // e.g. "assets/p3-guardian-hub.jpg"
    photo2: null,
    overview:
      "An advanced evolution of the Smart Energy Meter project, the Smart Guardian Hub is a comprehensive IoT-enabled home protection system. It goes beyond simple energy monitoring to provide whole-house electrical safety — covering overload protection, electrical fire prevention, temperature monitoring, and remote control — all through a real-time IoT dashboard accessible from anywhere.",
    features: [
      "IoT-enabled real-time monitoring dashboard — view live electrical parameters remotely from any device",
      "Overload protection with automatic relay cut-off before damage occurs to appliances",
      "Electrical fire prevention through continuous current surge and heat anomaly detection",
      "Home temperature monitoring with automatic alerts when ambient temperature exceeds safe limits",
      "Auto cut-off mechanism triggered instantly on overload, surge, or fire-risk detection",
      "Whole-house safety coverage — a single hub protects the entire electrical infrastructure"
    ],
    tags: ["IoT", "ESP32", "Relay Module", "Temperature Sensor", "Current Sensor", "Remote Dashboard", "Wi-Fi", "Auto Cut-Off", "Home Automation"],
    outcome: "Working IoT prototype tested with real overload, surge, and temperature scenarios. Dashboard shows live readings and triggers alerts correctly. Represents a significant upgrade over the Smart Energy Meter — a complete home electrical safety platform."
  },

  p4: {
    num: "P04",
    title: "BT Car Controller — PCB Design",
    category: "PCB Design · Hardware Engineering",
    photo: "assets/p4-pcb-sch.jpg",   //      ← schematic / top view
    photo2: "assets/p4-pcb-top.jpg", //    ← bottom / 3D render
    overview:
      "A fully custom-designed PCB for a feature-rich Bluetooth-controlled car, built around an ATmega328P microcontroller with an HC-05 Bluetooth module and L298N motor driver. Designed from scratch in EasyEDA Pro with manual routing, the board supports headlights, taillights, blinkers, a horn buzzer, vibration feedback, a servo connector, and a 2S LiPo battery system — all on one compact board.",
    features: [
      "Output pins: RH/LH – Headlights · RT/LT – Taillights · BUZ – Horn · VIB – Vibration · LB/RB – Blinkers · M1/M2 – Motor O/P · H2 – Servo Motor Connector",
      "Power system: VCHRG & G – Battery charge · B1+ – Positive terminal · BMP – Mid-point of two batteries · B2- – Negative terminal · SW – Power ON/OFF switch",
      "Input pins: BT MOD – HC-05 Bluetooth module · ICSP – In-Circuit Serial Programming for ATmega328P · SRCH – Serial Communication Header for BT module programming",
      "2S LiPo battery backup format — upgradeable to 2S2P or 2S3P for extended range and runtime",
      "Manual trace routing in EasyEDA Pro to minimise EMI between high-current motor traces and low-level signal lines",
      "Gerber files generated with ERC/DRC cleared — board ready for direct PCB fabrication"
    ],
    tags: ["EasyEDA Pro", "PCB Design", "ATmega328P", "HC-05 Bluetooth", "L298N", "Manual Routing", "2S LiPo", "ICSP", "Servo", "Gerber"],
    outcome: "PCB fabricated and physically tested. Bluetooth pairing, motor control, servo output, and lighting functions all validated on the hardware board. Demonstrates strong PCB design fundamentals — from schematic capture to routed board to working prototype."
  },

  p5: {
    num: "P05",
    title: "Smart Tension-Sensor Electrical Safety System",
    category: "R&D · Electrical Infrastructure Safety",
    photo: "assets/p5-tension-sensor.jpg",
    photo2: null,
    overview:
      "An R&D prototype addressing a novel problem in overhead electrical infrastructure — detecting wire stress or breakage before catastrophic failure and electrocution hazards occur. Tension sensors mounted on wire support structures continuously monitor mechanical load and trigger an automatic high-voltage power cutoff when dangerous conditions are detected.",
    features: [
      "Tension/load cell sensors on wire supports monitor mechanical stress in real time",
      "Threshold-based firmware logic distinguishes safe tension variation from wire breakage or dangerous sagging",
      "Automatic relay-based high-voltage power cutoff triggered instantly on sensor fault condition",
      "Low-power embedded controller enables always-on monitoring with minimal energy draw",
      "Local audible alarm output and provision for remote notification integration",
      "Field-ready prototype chassis designed for outdoor deployment and environmental resilience"
    ],
    tags: ["R&D", "Tension Sensor", "Load Cell", "Relay Control", "Embedded C", "High-Voltage Safety", "Microcontroller", "Power Cutoff"],
    outcome: "R&D prototype demonstrates successful wire stress detection and automatic power cutoff in bench-test conditions. Concept validated for potential deployment in real-world overhead electrical line monitoring and public safety systems."
  },

  p6: {
    num: "P06",
    title: "Digital Clock — Traditional PCB Design",
    category: "PCB Design · Digital Electronics",
    photo: "assets/p6-clock-schematic.jpg", //  ← schematic view
    photo2: "assets/p6-clock-pcb.jpg", //       ← PCB layout / built board
    overview:
      "A traditional digital clock circuit designed and built entirely using the CD4026 decade counter IC — no microcontroller involved. Designed from scratch in EasyEDA Pro, this project was a foundational exercise in PCB design skills, discrete digital logic, and timing circuits. It demonstrated that a functional, accurate timekeeper can be realised purely through hardware logic.",
    features: [
      "Core timing built around the CD4026 decade counter IC driving 7-segment displays directly",
      "Accurate 1Hz clock source using a 555 timer oscillator circuit for stable timekeeping",
      "Hours, minutes, and seconds displayed across six 7-segment LED displays",
      "Manual time-set buttons with hardware debouncing for hour and minute adjustment",
      "Entire schematic captured and PCB laid out in EasyEDA Pro with clean component placement",
      "Silkscreen labels and neat trace routing for educational clarity and easy assembly"
    ],
    tags: ["EasyEDA Pro", "PCB Design", "CD4026 Counter IC", "7-Segment Display", "555 Timer", "Discrete Logic", "Digital Electronics", "Schematic Design"],
    outcome: "PCB fabricated and fully assembled. Clock operates accurately with stable 1Hz timing. This project was a key milestone in developing PCB design skills — a stepping stone to more advanced custom board designs like the BT Car Controller."
  }

};

/* =============================================
   CERTIFICATES DATA
   c1–c5 = Certifications & Achievements section
   ============================================= */
const CERTS = {
  c1: {
    title: "PCB Design using EasyEDA — Certified",
    sub: "Certification · EasyEDA Platform",
    image: "assets/cert-easyeda.jpg"
  },
  c2: {
    title: "Industrial Automation Training for PLC",
    sub: "Training Certificate · MIT",
    image: "assets/cert-plc-mit.jpg"
  },
  c3: {
    title: "Fundamentals of Semiconductor",
    sub: "Certification",
    image: "assets/cert-semiconductor.jpg"
  },
  c4: {
    title: "National Level Project Expo",
    sub: "Achievement · Smart Energy Meter with Overload Indication",
    image: "assets/cert-national-expo.jpg"
  },
  c5: {
    title: "Event Coordinator — Code Debugging",
    sub: "Achievement · National-Level Technical Symposium",
    image: "assets/cert-event-coord.jpg"
  }
};

/* =============================================
   EXPERIENCE / INTERNSHIP CERTIFICATES
   e1 = IoT Trainer · e2 = Vi Micro · e3 = AICTE
   ============================================= */
const EXP_CERTS = {
  e1: {
    title: "IoT & Robotics Trainer",
    sub: "Govt. School Skill Development Program, Tamil Nadu · 2026 – Present",
    image: "assets/cert-iot-trainer.jpg"
  },
  e2: {
    title: "Embedded Systems Internship",
    sub: "Vi Micro Systems Pvt. Ltd., Chennai · Jun – Jul 2025 · 35 days",
    image: "assets/cert-vi-micro.jpg"
  },
  e3: {
    title: "Embedded System Developer",
    sub: "AICTE Virtual Internship (National Program) · Jan – Mar 2024 · 10 weeks",
    image: "assets/cert-aicte.jpg"
  }
};

/* Two new certifications added */
CERTS['c6'] = {
  title: "Value Added Course — Design & Simulation of Electronics & Embedded System Products",
  sub: "Certificate · Academic Value Added Course",
  image: "assets/cert-vac-embedded.jpg"
};
CERTS['c7'] = {
  title: "Typewriting English — Senior First Grade",
  sub: "Certificate · Tamil Nadu Typewriting Board",
  image: "assets/cert-typewriting.jpg"
};
