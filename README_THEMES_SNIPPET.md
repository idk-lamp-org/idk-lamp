## Themes (Optional)

The component is intentionally neutral by default.

If you want a specific look (like the tiny cyan dot used on idk-lamp.org),
you can load a theme CSS after the script.

### Theme: site-like tiny dot (cyan)

```html
<script src="https://idk-lamp.org/dist/idk-lamp.min.js"></script>
<link rel="stylesheet" href="https://idk-lamp.org/themes/site-dot.css" />

<idk-lamp state="idk"></idk-lamp>
```

### Theme: monochrome (low-attention)

```html
<script src="https://idk-lamp.org/dist/idk-lamp.min.js"></script>
<link rel="stylesheet" href="https://idk-lamp.org/themes/mono.css" />

<idk-lamp state="idk"></idk-lamp>
```

> Note: Themes that use `::part(lamp)` require the component to expose `part="lamp"`.
