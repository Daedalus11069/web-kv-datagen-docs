Table Of Contents

[[toc]]

## Profile Edit Screen

On this page, a profile's name and match URL may be edited, as well as [content key formatters](#content-key-formatters), and to a limited degree, [format type](#format-type).

### Name

The name of the profile, simply a way to distinguish it from other profiles. It needs to be unique, and may not be 'default'.

### Match

A profile's match URL is what determines if a profile is active for a given URL. Wildcards, an asterisk in this case(`*`) may be used to match a generalized url instead of a specific one, such as `https://example.com/*` vs `https://example.com/?a=test`. Wildcards will match one or more characters.

### Content Key Formatters

Content keys may be formatted individually to grab pieces of text or replace other pieces in a chained way, applying one formatter after another until the desired end is reached. Text may be entered to test the formatters against, but this text will not be saved when the profile is saved.

![Profile Content Key Formatters](/assets/web-kv-dg-profiles-1.jpg)

**Content Key formatters** are small, simple ways of dealing with text for an individual content key. Once content keys exist for a profile, select a content key by clicking on it in the left-most list:

![Profile Content Key Formatters selected](/assets/web-kv-dg-profiles-2.jpg)

There are two formatter types for text, and three for collections of text. A collection of text is what happens to text when it is sent through the **split** formatter; for example, the text `test` would become `[ "t", "e", "s", "t" ]`. All formatters that deal with text for arguments are case-sensitive, meaning that `A` and `a` are not the same.

Formatters for text:

- **Split**: Takes an optional argument of what to split the text by. Returns a collection of text:
  - _Example_: `test` -> `split("t")` -> `[ "", "es", "" ]`
- **Replace**: Takes two arguments, **search** and **replacement**. Returns text with the replacement made:
  - _Example_: `test` -> `replace("e", "A")` -> `tAst`

Formatters for collections of text:

- **At**: Takes a single argument, the 0-based index at which to fetch a specific piece of text from a collection. The index may be negative(in which case it is a 1-based index), which would fetch from the opposite end of the collection. Returns text.

  - _Example_: `[ "t", "e", "s", "t" ]` -> `at(1)` -> `e`
  - _Example_: `[ "t", "e", "s", "t" ]` -> `at(-2)` -> `s`

- **Slice**: Takes two arguments; the first is required, and the second is optional; the first argument specifies a 0-based index where to begin cutting up the collection to take a section out of it, while the second exclusively specifies a 0-based index to stop cutting at. This second index is not included in the returned collection.
  - _Example_: `[ "t", "e", "s", "t" ]` -> `slice(1)` -> `[ "e", "s", "t" ]`
  - _Example_: `[ "t", "e", "s", "t" ]` -> `slice(1,3)` -> `[ "e", "s" ]`
- **Join**: Takes one argument, the glue to join the collection together with. Glue is text, and is inserted between each collection peice.
  - _Example_: `[ "t", "e", "s", "t" ]` -> `join("|")` -> `t|e|s|t`

To remove any formatters in the chain, click the **x** above the formatter in question. Note that all subsequent formatters will also be deleted.

Once a formatter chain is finished, click **Set Formatter Chain** to add the formatter chain to the **Content Key**. **Save/Save And Return** has no effect on content key formatters.

### Format Type

A custom format may be used to define how exactly the content is formatted before being copied. Once **Content Keys** are set, they can be used by `[[content key name]]` in the field for **Custom Format**; this field may contain rich text, such as bold or italics, by highlighting the text in question and hitting either the _Bold_ or _Italics_ button, or by hitting `Control+b` or `Control+i`. Available Content Keys will be highlighted just above the input field, and a preview will be given as text is entered.

In order to apply rich text to the content keys, the entire key, with `[[]]`, must be selected before the rich text is applied.

Since Content itself is not available from this screen, any input content keys will be replaced with `<(content key name)>`.

<ZoomImg src="/assets/web-kv-dg-profiles-4.jpg" />
