# idk-lamp

A tiny UI signal that indicates when an AI stops deciding.

This is not a product.  
This is a sign.

---

## Quick Start (CDN)

Just include the script and use the custom element.

```html
<script src="https://idk-lamp.org/dist/idk-lamp.min.js"></script>

<idk-lamp state="idk"></idk-lamp>
```

No build tools.  
No dependencies.

---

## States

`idk-lamp` has two states.

```html
<idk-lamp state="active"></idk-lamp>
<idk-lamp state="idk"></idk-lamp>
```

- `active` (default): normal / confident state  
- `idk`: AI does not decide (uncertain)

The meaning is intentionally minimal.

---

## Interactive (Optional)

For demos or prototypes, you can enable interaction.

```html
<idk-lamp interactive></idk-lamp>
```

When `interactive` is set:
- Click toggles the state
- `Enter` / `Space` toggles the state

This is optional and not required for normal use.

---

## Customization (CSS Variables)

You can adjust size and colors via CSS variables.

```css
idk-lamp {
  --size: 64px;
  --border-width: 6px;
  --border-color: #333;

  --color-active: #007AFF; /* blue */
  --color-idk: #D9A404;    /* low-saturation amber */
}
```

No JavaScript configuration is required.

---

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard operable when `interactive` is enabled
- No sound, no alert, no forced attention

This component is designed to be quiet.

---

## Design Notes

- No face  
- No voice  
- No opinion  

Only:
- boundary
- color
- light

---

## License

This work is released under **CC0 1.0 Universal**.

You can use it for any purpose,  
commercial or non-commercial,  
without attribution.

---

## What this is / is not

**This is:**
- a small UI signal
- a reusable visual sign
- a boundary marker

**This is not:**
- an AI product
- a decision engine
- a safety guarantee

Use it freely.
