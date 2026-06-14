// SecuriFeed URL Analyzer

const analyzeBtn = document.getElementById("analyzeBtn");
const urlInput = document.getElementById("urlInput");
const resultBox = document.getElementById("result");

analyzeBtn.addEventListener("click", analyzeURL);

function analyzeURL() {

    const url = urlInput.value.trim();

    if (!url) {
        showResult(
            "0",
            "INVALID",
            ["Please enter a URL first"],
            "#ff3366"
        );
        return;
    }

    let score = 0;
    let findings = [];

    // HTTPS Check
    if (url.startsWith("https://")) {
        score += 20;
        findings.push("HTTPS Enabled");
    } else {
        score += 40;
        findings.push("No HTTPS Detected");
    }

    // IP Address Detection
    const ipPattern =
        /(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}/;

    if (ipPattern.test(url)) {
        score += 25;
        findings.push("IP Address Used Instead Of Domain");
    }

    // Suspicious Symbols
    if (url.includes("@")) {
        score += 20;
        findings.push("@ Symbol Found");
    }

    if (url.includes("//") && url.lastIndexOf("//") > 8) {
        score += 15;
        findings.push("Redirect Pattern Detected");
    }

    // Long URL
    if (url.length > 75) {
        score += 15;
        findings.push("Unusually Long URL");
    }

    // Fake Keywords
    const suspiciousWords = [
        "login",
        "secure",
        "verify",
        "banking",
        "update",
        "account",
        "signin",
        "confirm",
        "wallet",
        "payment",
        "gift"
    ];

    suspiciousWords.forEach(word => {
        if (url.toLowerCase().includes(word)) {
            score += 5;
            findings.push(`Suspicious Keyword: ${word}`);
        }
    });

    // Typosquatting Check
    const fakeBrands = [
        "paypaI",
        "arnazon",
        "faceb00k",
        "g00gle",
        "micr0soft",
        "instagrarn",
        "whatsaap"
    ];

    fakeBrands.forEach(brand => {
        if (url.includes(brand)) {
            score += 25;
            findings.push("Typosquatting Detected");
        }
    });

    // Risk Level

    let level = "";
    let color = "";

    if (score <= 25) {
        level = "LOW RISK";
        color = "#00ff99";
    }

    else if (score <= 60) {
        level = "MEDIUM RISK";
        color = "#ffcc00";
    }

    else {
        level = "HIGH RISK";
        color = "#ff3366";
    }

    showResult(score, level, findings, color);
}

function showResult(score, level, findings, color) {

    resultBox.innerHTML = `

        <div class="risk-card">

            <h2 style="color:${color}">
                ${score}/100
            </h2>

            <h3 style="color:${color}">
                ${level}
            </h3>

            <div class="risk-bar">
                <div
                    class="risk-fill"
                    style="
                        width:${score}%;
                        background:${color};
                    ">
                </div>
            </div>

            <h4>Threat Analysis</h4>

            <ul>
                ${findings
                    .map(item => `<li>✔ ${item}</li>`)
                    .join("")}
            </ul>

        </div>

    `;
}