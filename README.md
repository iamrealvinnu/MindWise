# MindWise 🧠
### **The Elastic Fitness for your Mind Ecosystem**

MindWise is a high-performance, immersive landing experience engineered to bridge the gap between human psychology and digital fluidity. Built with **React 19**, **Next.js 15+**, and **Tailwind CSS 4**, this project represents the pinnacle of modern web architecture, featuring a unique 4-quadrant interactive grid and a zero-backend lead generation system.

---

## 🏛️ Corporate Identity & Legal Framework

This project is a proprietary asset governed by the legal entities defined below. All rights are reserved under Indian and International Intellectual Property laws.

### **1. Project Ownership**
**MINDWISE INDIA PRIVATE LIMITED**
*   **CIN:** `U86909KA2026PTC214226`
*   **Incorporation Date:** January 15, 2026
*   **Registered Office:** No 8/3 Prince Ville, CHALLAGHATTA VILLAGE, Viveknagar (Bangalore), Bangalore South, Karnataka, India, 560047.
*   **Board of Directors:** Viswan Sofia, Aravind Thondan.

### **2. Strategic Development Partner**
**GDI NEXUS SOFTWARE SOLUTIONS LLP**
*   **LLPIN:** `ACI-9725`
*   **Official Website:** [gdinexus.com](https://gdinexus.com)
*   **Registered Office:** 33, Thoppan Line, Fingerpost Kandal, Udagamandalam, Nilgiris, Tamil Nadu, India, 643001.

---

## 🚀 Technical Architecture

### **1. Fluid Grid Navigation (Spatial UI)**
The core interface is built on a dynamic 4-quadrant grid system powered by **Framer Motion 12**.
-   **Shared Layout Transitions:** Using `layoutId` and `AnimatePresence`, the UI performs seamless morphing from quadrant previews to full-screen deep-dives.
-   **Spring Physics:** Custom spring configurations (stiffness 300, damping 30) ensure "elastic" responsiveness during interactions.
-   **Cinematic Sequencing:** A 4.5-second orchestrated intro sequence with SVG-based noise overlays and blur-filter exit animations.

### **2. Zero-Backend Lead Generation**
MindWise utilizes a **no-CORS Google Form submission** technique to manage lead generation without a dedicated backend server.
-   **Endpoint:** Production Google Form endpoint with field mapping.
-   **Validation:** Dynamic, region-specific phone number validation for 20+ countries (including India, US, UK, etc.).
-   **Data Storage:** Responses are centralized in real-time.
-   **Management Console:** [MindWise Lead Management (Google Sheets)](https://docs.google.com/spreadsheets/d/148w281SudEYZNQA8X8xoN9ADsYi8qQsscZ9lR8hV2mY/edit?usp=sharing)

### **3. Performance & Compilation**
-   **React 19 Compiler:** Enabled via `reactCompiler: true` in `next.config.ts`, utilizing `babel-plugin-react-compiler` for optimized re-renders and automatic memoization.
-   **Tailwind CSS 4:** Leverages the latest CSS-in-JS capabilities and optimized bundle sizes.
-   **Responsive Design:** Fully adaptive grid that transitions from 2x2 on desktop to a stacked layout on mobile devices.

---

## 🛡️ Proprietary Protection & Usage Mandate

### **Intellectual Property (IP) Rights**
The architectural design, source code, custom hooks, spatial UI logic (Framer Motion implementations), and digital assets contained within this repository are the exclusive property of **MindWise India Private Limited**, developed and maintained by **GDI Nexus Software Solutions LLP**.

### **Usage Restrictions**
*   **Non-Disclosure:** This codebase is a "Secure Readme" environment. Unauthorized access, copying, or redistribution of any logic or asset is strictly prohibited.
*   **Zero-Harm Policy:** Any attempt to reverse-engineer, exploit, or "harm" the digital integrity of this system—or the reputations of the developer firm and the parent company—will be met with immediate legal recourse.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router) |
| **Core** | React 19 (Compiler Enabled) |
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

---

## 🎨 Design Philosophy
MindWise follows a **Soothing Professionalism** aesthetic:
*   **Primary:** `#6A4C93` (Deep Amethyst) - Trust and Depth.
*   **Accent:** `#B39DDB` (Light Lavender) - Calm and Clarity.
*   **Neutral:** `#2D3748` (Slate Charcoal) - Grounded and Professional.
*   **Background:** `#E2DBF0` (Soft Periwinkle) - Soothing entry point.

Developed with precision and care by **GDI Nexus** for the future of psychological well-being.
