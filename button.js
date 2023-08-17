class CustomButton extends HTMLElement {
	constructor() {
		super();

		const styleLink = '<link rel="stylesheet" href="button.css" />';

		const template = document.createElement("template");
		template.innerHTML = `
			${styleLink}
			<button>
				<slot></slot>
			</button>
		`;

		const shadow = this.attachShadow({ mode: "open" });
		shadow.append(template.content.cloneNode(true));
	}

	className = "c-button";

	connectedCallback() {
		const button = this.shadowRoot.querySelector("button");

		button.classList.add(this.className);
		button.classList.add(
			this.className +
				"--" +
				(this.hasAttribute("c-style")
					? this.getAttribute("c-style")
					: "primary")
		);
	}
}

customElements.define("custom-button", CustomButton);
