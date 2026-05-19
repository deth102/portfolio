export type Project = {
  title: string;
  description: string;
  url: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "AutoDub-Lite",
    description:
      "End-to-end AI dubbing pipeline that converts English YouTube videos into Vietnamese using STT, translation and TTS.",
    url: "https://github.com/deth102/AutoDub_Lite",
    tags: ["STT", "MT", "TTS"],
  },
  {
    title: "Real-Time Fault Diagnosis on Edge",
    description:
      "Softmax Regression and Random Forest deployed on edge hardware for standalone real-time fault diagnosis from raw vibration signals.",
    url: "https://github.com/deth102/Realtime_fault_diagnosis_on_edgedevice",
    tags: ["Edge AI", "Vibration"],
  },
  {
    title: "Random Forest & Logistic Regression",
    description:
      "Vibration-based fault diagnosis pipeline with time–frequency analysis, advanced signal preprocessing and optimized classical models.",
    url: "https://github.com/deth102/random_forest_logistic_regression",
    tags: ["Signal Processing"],
  },
  {
    title: "CNN Transfer Learning",
    description:
      "CNN-based transfer learning to adapt fault diagnosis models across operating conditions with limited labeled target-domain data.",
    url: "https://github.com/deth102/cnn-transferlearning",
    tags: ["CNN", "Transfer Learning"],
  },
  {
    title: "Transformer-Based Fault Diagnosis",
    description:
      "Conv-Transformer and Vision Transformer for time-series and time–frequency data — accurate diagnosis of complex mechanical faults.",
    url: "https://github.com/deth102/transformer_for_fault_diagnosis",
    tags: ["Transformer"],
  },
  {
    title: "Softmax Regression from Scratch",
    description:
      "Softmax-based neural network implemented from scratch (no ML/DL libraries) and deployed in C++ for low-level, embedded AI execution.",
    url: "https://github.com/deth102/softmax_regression",
    tags: ["Python", "C++"],
  },
];
