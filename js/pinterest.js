let backdrop = document.querySelector('div[data-test-id="giftWrap"]');

if (backdrop) {
  backdrop.style.display = backdrop.style.display !== "none" ? "none" : "block";
}
