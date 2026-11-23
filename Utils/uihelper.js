
export async function fillInput(locator, value) {
    await locator.fill(value);
}

export async function click(locator) {
    await locator.click();
}

export async function mousehover(locator) {
    await locator.hover();
}

export async function selectByValue(locator, value) {
    await locator.selectOption({ value: value });
}

export async function selectByLabel(locator, label) {
    await locator.selectOption({ label: label });
}

export async function selectByIndex(locator, index) {
    await locator.selectOption({ index: index });
}
