import { DateParser } from "./DateParser";
import { DayFormatter } from "./DayFormatter";

class Main {
  readonly HEADER_SELECTOR = "rm-title-display";
  readonly BODY_SELECTOR = ".roam-body";
  readonly DAY_CLASS = "roam-day--day-title";

  run() {
    this.addDateToRoamTitleBanners();
    this.addObserver();
  }

  private addObserver() {
    const observerHeadings = new MutationObserver(() =>
      this.addDateToRoamTitleBanners()
    );
    const $body = document.querySelector(this.BODY_SELECTOR);
    if ($body) {
      observerHeadings.observe($body, {
        childList: true,
        subtree: true,
      });
    }
  }

  private addDateToRoamTitleBanners() {
    for (const $headerNode of this.getHeaderNodes()) {
      this.addDateToRoamTitleBanner($headerNode);
    }
  }

  private addDateToRoamTitleBanner($headerNode: Element) {
    const headerText = $headerNode.textContent || "";
    const dayString = this.getDayString(headerText);
    return (
      dayString && this.appendNode(this.createDayNode(dayString), $headerNode)
    );
  }

  private getDayString(text: string) {
    const date = new DateParser().parse(text);
    return date && new DayFormatter().format(date);
  }

  private createDayNode(dayString: string) {
    const $dayNode = document.createElement("div");
    $dayNode.innerHTML = dayString;
    $dayNode.classList.add(this.DAY_CLASS);
    return $dayNode;
  }

  private appendNode($newNode: Element, $targetNode: Element) {
    $targetNode.insertAdjacentElement("beforeend", $newNode);
  }

  private getHeaderNodes() {
    return document.getElementsByClassName(this.HEADER_SELECTOR);
  }
}

export { Main };
