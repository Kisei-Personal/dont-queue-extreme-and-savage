const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // Update buttons
    tabs.forEach((t) => {
      t.classList.remove(
        "active",
        "text-light-cy",
        "bg-light-ui",
        "border-light-cy",
        "dark:text-dark-cy",
        "dark:bg-dark-ui-3",
        "dark:border-dark-cy",
      );
      t.classList.add(
        "text-light-tx-2",
        "border-light-ui-3",
        "dark:border-dark-ui-3",
      );
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach((p) => p.classList.add("hidden"));
    tab.classList.add(
      "active",
      "text-light-cy",
      "bg-light-ui",
      "border-light-cy",
      "dark:text-dark-cy",
      "dark:bg-dark-ui-3",
      "dark:border-dark-cy",
    );
    tab.classList.remove(
      "text-light-tx-2",
      "border-light-ui-3",
      "dark:border-dark-ui-3",
    );
    tab.setAttribute("aria-selected", "true");

    // Update panels
    document.getElementById(target).classList.remove("hidden");
  });
});
