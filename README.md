# MindWise 🧠

### **The Elastic Mental Fitness Ecosystem**

MindWise is a high-performance, immersive landing experience built to bridge the gap between human psychology and digital fluidity. Designed with a focus on "Human-Aligned UI," the application utilizes elastic spatial animations and a multi-step discovery state machine to guide users through their mental fitness journey.

---

## 🚀 Technical Highlights

### **1. Elastic Spatial UI (Framer Motion 12)**
The core interface is built on a dynamic 4-quadrant grid system. Using Framer Motion's `layoutId` and `AnimatePresence`, the UI performs **Shared Layout Transitions**, allowing quadrants to morph into full-screen deep dives without losing visual context.

*   **Cinematic Sequencing:** A 3.5-second "Solo Logo" entrance built with spring physics creates a moment of brand focus before the ecosystem "blooms" into view.
*   **Contextual Morphing:** Components intelligently resize based on hover states and active view triggers, maintaining a 60fps fluid experience.

### **2. Guided Discovery State Machine**
Rather than static forms, MindWise features a **6-step internal discovery flow**:
*   `Intro` → `Identity` → `Focus` → `Expert Profile` → `Contact` → `Confirmation`.
*   The system uses persistent state logic to customize the "Expert Profile" step based on user inputs (e.g., matching "Teens" with "Resilience" experts).

### **3. Performance-First Styling (Tailwind CSS 4)**
*   **Fluid Mesh Gradients:** Dynamic background blobs are animated via CSS keyframes to avoid the "stark white" sterile feel of traditional medical apps.
*   **Adaptive Typography:** A refined typographic scale that balances bold impact with soothing readability, utilizing variable font weights for maximum legibility across all viewport scales.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Runtime** | Node.js 20+ |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Deployment** | Netlify |

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/iamrealvinnu/MindWise.git
    cd MindWise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🌐 Netlify Deployment

This project is optimized for Netlify deployment. To deploy manually:

1.  Push your changes to GitHub.
2.  Connect your repository to **Netlify**.
3.  Ensure the following settings are detected:
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `.next`

---

## 🎨 Design Philosophy
MindWise follows a **Soothing Professionalism** aesthetic:
*   **Primary:** `#6A4C93` (Deep Amethyst) - Trust and Depth.
*   **Accent:** `#B39DDB` (Light Lavender) - Calm and Clarity.
*   **Charcoal:** `#2D3748` (Slate Charcoal) - Grounded and Professional.

Developed with ❤️ for the future of mental fitness.
