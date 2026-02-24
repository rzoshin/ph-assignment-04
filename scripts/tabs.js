/* ======================================================
   TAB TOGGLING
   ====================================================== */

/**
 * Removes active styles from all tabs
 */
function resetTabs() {
    const interviewTab = document.getElementById("interview-tab");
    const rejectedTab = document.getElementById("rejected-tab");
    const allTab = document.getElementById("all-tab");

    interviewTab.classList.remove("bg-[#3B82F6]", "text-white");
    rejectedTab.classList.remove("bg-[#3B82F6]", "text-white");
    allTab.classList.remove("bg-[#3B82F6]", "text-white");
}

/**
 * Toggle Style between Tabs
 */
function showOnly(id) {
    const main = document.getElementById("jobs-card");
    main.classList.add("hidden");

    const interview = document.getElementById("interview-section");
    interview.classList.add("hidden");

    const rejected = document.getElementById("rejected-section");
    rejected.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

    resetTabs();

    const interviewTab = document.getElementById("interview-tab");
    const rejectedTab = document.getElementById("rejected-tab");
    const allTab = document.getElementById("all-tab");

    if (id == "interview-section") {
        interviewTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = interviewArray.length;
    }
    else if (id == "rejected-section") {
        rejectedTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = rejectedArray.length;
    }
    else if (id == "jobs-card") {
        allTab.classList.add("bg-[#3B82F6]", "text-white");
        headCount.innerText = total.innerText;
    }
}