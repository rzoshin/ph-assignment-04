/* ======================================================
   REUSABLE HELPERS
   ====================================================== */

/**
 * Extracts job card data from DOM element
 */
function extractCardData(parent) {
    const jobName = parent.querySelector(".jobName").innerText;
    const bio = parent.querySelector(".bio").innerText;
    const description = parent.querySelector(".description").innerText;
    const status = parent.querySelector(".state").innerText;
    const details = parent.querySelector(".details").innerText;

    return { jobName, bio, description, status, details };
}

/**
 * Creates empty state block
 */
function createEmptyState() {
    let div = document.createElement("div");
    div.className = "py-[60px] px-10 bg-base-100 text-center";
    div.innerHTML = `<img class="mx-auto mb-5"src="./nothing.png" alt="">
                    <h2 class="text-2xl font-semibold mb-1">No jobs available</h2>
                    <p class="text-base">Check back soon for new job opportunities</p>`;
    return div;
}