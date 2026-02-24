/* ======================================================
   JOB TRACKER SCRIPT
   ====================================================== */


/* ======================================================
   STATE & COUNT TRACKING
   ====================================================== */
/* ======================================================
   DEFAULT TAB ON PAGE LOAD
   ====================================================== */

window.addEventListener("DOMContentLoaded", function () {
    showOnly("jobs-card");
});
// Tracking the counts
const total = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const headCount = document.getElementById("No-of-jobs");

let interviewArray = [];
let rejectedArray = [];

/**
 * Recalculates and updates all counters
 */
function calculateCount() {
    const parent = document.getElementById("jobs-card");
    total.innerText = parent.children.length;
    interviewCount.innerText = interviewArray.length;
    rejectedCount.innerText = rejectedArray.length;
}