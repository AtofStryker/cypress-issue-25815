it("File Upload using selectFile with select mode", () => {
  cy.visit("https://practice.automationbro.com/cart/");

  cy.get("input[type=file")
    .invoke("removeClass", "file_input_hidden")
    .selectFile("cypress/fixtures/image.png");

  cy.get('input[value="Upload File"]').click();
  cy.get("#wfu_messageblock_header_1_label_1", { timeout: 10000 }).should(
    "contain",
    "uploaded successfully"
  );
});
