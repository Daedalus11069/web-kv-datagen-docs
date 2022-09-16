Table Of Contents

[[toc]]

## Profiles

The extension comes with a default profile enabled by default, that will match any URL the extension is activated on. Additional profiles may be created as desired, but only the ones matching the current URL will show in the select list on the popup. Additional profiles can likewise be deleted; only the default profile may not be deleted.

### Default Profile

This profile can be disabled in the options screen, under **Config**, found by either using the context menu for the extension icon and selecting **options**, or clicking the gear icon in the extension popup.

### Profile Creation

To create a profile, visit the options page of the extension, and click the **Create Profile** button; a modal will pop up asking for a name of the profile, and an optionally wildcard-based URL to match against. The profile will be selectable on websites that match. The longest matching URL will match first.

![Profiles Screen](/assets/web-kv-dg-options-1.jpg)

Once a profile is created, it may be edited to a limited degree by clicking its name in the profiles options screen.

<ZoomImg src="/assets/web-kv-dg-options-2.jpg" />

[Click here for more information about profiles](/profiles)

## The Popup

This popup is the main way the extension is interacted with. If profiles are active on the given URL where the popup is opened, it will look like this:

![Popup Selector Tab](/assets/web-kv-dg-popup-1.jpg)

If multiple profiles are matched for the given URL, the currently active one may be selected from the select list at the top.

### Content Selector tab

This tab is where the content that the extension formats is configured; **Content Keys** may be set and edited here, as well as re-ordered or outright deleted. The order is important for the **Spreadsheet-row** format type, to be discussed later in [Content Formatter Tab](#content-formatter-tab).

#### Creating Content Keys

To get started, fill out the **Content Key** field with the name of the content. Keep it simple. With the **Content Key** field filled out, click **Select Content**. The cursor on the webpage will become a crosshair, and any page element it hovers over will gain a temporary dotted line to indicate it is what will be selected when the mouse is clicked. When ready, click the mouse. The mouse cursor will return to normal and the **selector-path** field will be filled with content. From here, click the **Add Content Key** button, which is now enabled.

When this is done, a row will appear underneath the **Add Content Key** button. This row can be dragged up or down to re-order the content key against other keys(should they exist) for the **Spreadsheet-row** format type.

### Content Foramtter tab

The **Content Formatter** tab is used to choose the format type of the content, and if necessary, format the content with the **Custom format** format type.

![Popup Formatter Tab](/assets/web-kv-dg-popup-3.jpg)

#### Spreadsheet-row type

The default format type is **Spreadsheet-row**; this format type has two types of configuration, discussed under [Configuration/Profiles](/profiles#content-key-formatters), but only the selection of the type is visible from this tab. If this type is selected, the content from the **Content Keys** is separated by tabs with new lines removed, for pasting into a spreadsheet. The content for the spreadsheet row is ordered according to the order of the keys from the [Content Selector tab](#content-selector-tab).

1. The first type of configuration is **Blank Content Replacement**; this is accessed from the extension's options page under the **Config** menu link, and will replace any content that is blank with a specified value.
2. The second type of configuration is accessed from a profile edit screen, [content key formatters](/profiles#content-key-formatters).

#### Custom Format type

A custom format may be used to define how exactly the content is formatted before being copied. Once **Content Keys** are set, they can be used by `[[content key name]]` in the field for **Custom Format**; this field may contain rich text, such as bold or italics, by highlighting the text in question and hitting either the _Bold_ or _Italics_ button, or by hitting `Control+b` or `Control+i`. Available Content Keys will be highlighted just above the input field, and a preview will be given as text is entered.

In order to apply rich text to the content keys, the entire key, with `[[]]`, must be selected before the rich text is applied.

A refresh may be required for the text of content keys to appear.

![Custom format type](/assets/web-kv-dg-popup-4.jpg)

### Hotkey Config tab

Here, the hotkey for copying text may be configured. To configure a hotkey, simply click **Record**, enter the hotkey as it would normally be pressed, and then hit **Stop Recording**. The content key should now work, but a page refresh may be required.

### Icon Config tab

Finally, the icon itself may be configured to appear at all, and if so, in any of the web page's four corners with an optional offset of at max 200 pixels. The copied notitication will appear in this spot as well, regardless of whether the icon is enabled or not.
