# Motivational-Quotes-Extension
Motivational-Quotes-Extension is a Chrome extension created to boost your productivity and focus by displaying inspirational and motivational quotes directly from Unsplash. Every time you open the extension, it fetches a random motivational quote image to help keep you inspired while you work or study.


---
### Features
- **Dynamic Quotes**: Fetches random motivational quotes from Unsplash's library.
- **Inspiration on Demand**: Provides a new quote every time you open the extension.
- **Clean UI**: Displays quotes in a visually appealing manner.
- **Easy to Use**: Simply install and open the extension to get started.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/faizuuugit/Motivational-Quotes-Extension
    ```
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the cloned directory.

###  Background Working
1. **Content Script Injection**: The extension injects a content script into every page you visit.
2. **Fetching the Current URL**: The content script sends a message to the background script, which fetches the current URL and sends it back to the content script.
3. **Displaying the Reminder**: The content script then sends a message to the popup script.
4. **Fetching a Quote**: The popup script fetches a random motivational quote image from Unsplash and displays it.





---
