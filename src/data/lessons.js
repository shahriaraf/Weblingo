// TagWise – Complete Lesson Database
// All HTML, CSS, and JavaScript lessons

export const TRACKS = {
  HTML: 'html',
  CSS: 'css',
  JS: 'js',
};

export const DIFFICULTY = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
};

// ─── HTML LESSONS ────────────────────────────────────────────────────────────
export const htmlLessons = [
  // UNIT 1: Introduction
  {
    id: 'html-intro',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'What is HTML?',
    icon: '🏗️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 10,
    description: 'Understand the building blocks of every webpage.',
    type: 'concept',
    content: {
      theory: 'HTML (HyperText Markup Language) is the skeleton of every webpage. It defines structure using <strong>elements</strong> wrapped in <strong>tags</strong>.',
      visual: 'structure',
      steps: [
        { text: 'HTML stands for HyperText Markup Language', highlight: 'HTML' },
        { text: 'Tags are written with < and > brackets', highlight: '<tag>' },
        { text: 'Most tags come in pairs: opening and closing', highlight: '<p>...</p>' },
        { text: 'Tags create elements that browsers render', highlight: 'elements' },
      ]
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'High Tech Modern Layout', 'HyperText Making Links', 'Home Tool Markup Language'],
        answer: 0,
        explanation: 'HTML = HyperText Markup Language — the standard language for web pages.'
      },
      {
        type: 'tap-correct',
        question: 'Which is a valid HTML tag?',
        options: ['<heading>', '<h1>', '[h1]', '{h1}'],
        answer: 1,
        explanation: 'HTML tags use angle brackets < >. The h1 tag creates the largest heading.'
      }
    ]
  },
  {
    id: 'html-structure',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'HTML Document Structure',
    icon: '📄',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Learn the essential structure every HTML page needs.',
    type: 'interactive',
    content: {
      theory: 'Every HTML page has a required structure: DOCTYPE declaration, html, head, and body elements.',
      visual: 'document-tree',
      code: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>`,
      interactive: {
        type: 'drag-structure',
        items: ['<!DOCTYPE html>', '<html>', '<head>', '<title>', '</title>', '</head>', '<body>', '</body>', '</html>'],
        hint: 'Arrange tags in the correct order'
      }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Where should page content visible to users go?',
        options: ['<head>', '<title>', '<body>', '<meta>'],
        answer: 2,
        explanation: 'The <body> element contains all visible page content.'
      }
    ]
  },
  {
    id: 'html-headings',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Headings',
    icon: '📰',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 10,
    description: 'Use h1–h6 to create a visual hierarchy.',
    type: 'visual-interactive',
    content: {
      theory: 'HTML has 6 heading levels: h1 (largest/most important) to h6 (smallest). Use them to create document hierarchy.',
      visual: 'headings-scale',
      interactive: {
        type: 'slider-heading',
        description: 'Drag the slider to see different heading sizes',
      }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which heading is the MOST important/largest?',
        options: ['<h6>', '<h3>', '<h1>', '<h4>'],
        answer: 2,
        explanation: '<h1> is the most important heading — there should be only one per page.'
      }
    ]
  },
  {
    id: 'html-paragraphs',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Paragraphs & Text',
    icon: '✍️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 10,
    description: 'Add paragraphs and format inline text.',
    type: 'visual-interactive',
    content: {
      theory: 'Use <p> for paragraphs, <strong> for bold, <em> for italic, and <br> for line breaks.',
      visual: 'text-formatting',
      interactive: { type: 'text-builder' }
    },
    quiz: [
      {
        type: 'fill-blank',
        question: 'Complete: Use the ___ tag to create a paragraph.',
        answer: '<p>',
        hint: 'It stands for "paragraph"'
      }
    ]
  },
  {
    id: 'html-links',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Links (Anchor Tags)',
    icon: '🔗',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Create clickable links with the anchor tag.',
    type: 'visual-interactive',
    content: {
      theory: 'The <a> (anchor) tag creates hyperlinks. The href attribute specifies the destination URL.',
      visual: 'link-anatomy',
      interactive: { type: 'link-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which attribute specifies a link\'s destination?',
        options: ['src', 'href', 'link', 'url'],
        answer: 1,
        explanation: 'href (Hypertext Reference) defines where the link goes.'
      }
    ]
  },
  {
    id: 'html-images',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Images',
    icon: '🖼️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Embed images into your webpage.',
    type: 'visual-interactive',
    content: {
      theory: 'The <img> tag embeds images. It\'s a self-closing tag with src (source) and alt (alternative text) attributes.',
      visual: 'image-anatomy',
      interactive: { type: 'image-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Why is the alt attribute important?',
        options: ['It changes image size', 'It adds a caption below', 'It describes the image for accessibility', 'It links to the image'],
        answer: 2,
        explanation: 'alt text is read by screen readers and shown when image fails to load.'
      }
    ]
  },
  {
    id: 'html-lists',
    track: TRACKS.HTML,
    unit: 2,
    unitName: 'Lists & Tables',
    title: 'Lists',
    icon: '📋',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Create ordered and unordered lists.',
    type: 'visual-interactive',
    content: {
      theory: '<ul> creates bullet lists, <ol> creates numbered lists. Both use <li> for each item.',
      visual: 'lists-comparison',
      interactive: { type: 'list-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which tag creates a numbered (ordered) list?',
        options: ['<ul>', '<nl>', '<ol>', '<list>'],
        answer: 2,
        explanation: '<ol> = Ordered List. <ul> = Unordered List (bullets).'
      }
    ]
  },
  {
    id: 'html-tables',
    track: TRACKS.HTML,
    unit: 2,
    unitName: 'Lists & Tables',
    title: 'Tables',
    icon: '📊',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Build data tables with rows and columns.',
    type: 'visual-interactive',
    content: {
      theory: 'Tables use <table>, <tr> (rows), <th> (header cells), and <td> (data cells). The <thead> and <tbody> group rows.',
      visual: 'table-anatomy',
      interactive: { type: 'table-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What does <tr> stand for?',
        options: ['Table Row', 'Text Right', 'Table Reference', 'Table Right'],
        answer: 0,
        explanation: '<tr> = Table Row. It wraps <td> or <th> cells in a horizontal row.'
      }
    ]
  },
  {
    id: 'html-forms',
    track: TRACKS.HTML,
    unit: 3,
    unitName: 'Forms & Input',
    title: 'Forms Basics',
    icon: '📝',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Create forms to collect user input.',
    type: 'visual-interactive',
    content: {
      theory: 'Forms use the <form> element. Inside you put input fields, labels, and a submit button.',
      visual: 'form-anatomy',
      interactive: { type: 'form-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What attribute on <form> defines where data is sent?',
        options: ['href', 'action', 'method', 'target'],
        answer: 1,
        explanation: 'The action attribute defines the URL where form data is sent on submit.'
      }
    ]
  },
  {
    id: 'html-input-types',
    track: TRACKS.HTML,
    unit: 3,
    unitName: 'Forms & Input',
    title: 'Input Types',
    icon: '⌨️',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Explore all the HTML input types.',
    type: 'visual-interactive',
    content: {
      theory: 'The type attribute on <input> defines what kind of input is shown: text, email, password, checkbox, radio, range, color, date, file, and more.',
      visual: 'input-types-gallery',
      interactive: { type: 'input-playground' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which input type shows a color picker?',
        options: ['type="picker"', 'type="color"', 'type="palette"', 'type="hue"'],
        answer: 1,
        explanation: 'type="color" creates a native color picker widget.'
      }
    ]
  },
  {
    id: 'html-semantic',
    track: TRACKS.HTML,
    unit: 4,
    unitName: 'Semantic HTML',
    title: 'Semantic Elements',
    icon: '🧠',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Use meaningful tags that describe content purpose.',
    type: 'visual-interactive',
    content: {
      theory: 'Semantic tags like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> describe the meaning of content.',
      visual: 'semantic-layout',
      interactive: { type: 'semantic-sorter' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which element represents a self-contained blog post?',
        options: ['<section>', '<div>', '<article>', '<content>'],
        answer: 2,
        explanation: '<article> is for self-contained content that could be distributed independently.'
      }
    ]
  },
  {
    id: 'html-divs-spans',
    track: TRACKS.HTML,
    unit: 4,
    unitName: 'Semantic HTML',
    title: 'Divs & Spans',
    icon: '📦',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Generic containers for layout and styling.',
    type: 'visual-interactive',
    content: {
      theory: '<div> is a block-level container. <span> is an inline container. Both are used for styling via CSS classes.',
      visual: 'div-span-compare',
      interactive: { type: 'container-builder' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What is the main difference between <div> and <span>?',
        options: ['div is newer', 'div is block-level, span is inline', 'span can have classes, div cannot', 'No difference'],
        answer: 1,
        explanation: '<div> creates a block (full width), <span> stays inline with text.'
      }
    ]
  },
  {
    id: 'html-attributes',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Attributes',
    icon: '🏷️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Add extra info to HTML elements with attributes.',
    type: 'visual-interactive',
    content: {
      theory: 'Attributes provide additional information about elements. They go inside the opening tag: <tag attribute="value">.',
      visual: 'attribute-anatomy',
      interactive: { type: 'attribute-builder' }
    },
    quiz: []
  },
  {
    id: 'html-meta',
    track: TRACKS.HTML,
    unit: 1,
    unitName: 'HTML Foundations',
    title: 'Meta Tags',
    icon: '🔍',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 15,
    description: 'Add metadata for SEO and browser behavior.',
    type: 'concept',
    content: {
      theory: 'Meta tags go inside <head> and provide metadata: charset, viewport, description, keywords, og: tags for social sharing.',
      visual: 'meta-examples',
      interactive: { type: 'meta-builder' }
    },
    quiz: []
  },
  {
    id: 'html-media',
    track: TRACKS.HTML,
    unit: 5,
    unitName: 'Media',
    title: 'Audio & Video',
    icon: '🎬',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Embed audio and video with HTML5 elements.',
    type: 'visual-interactive',
    content: {
      theory: 'HTML5 introduced <audio> and <video> elements with controls, autoplay, loop, and muted attributes.',
      visual: 'media-players',
      interactive: { type: 'media-builder' }
    },
    quiz: []
  },
  {
    id: 'html-iframe',
    track: TRACKS.HTML,
    unit: 5,
    unitName: 'Media',
    title: 'iFrames',
    icon: '🪟',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 15,
    description: 'Embed external content with iframes.',
    type: 'concept',
    content: {
      theory: '<iframe> embeds another HTML page inside your page. Used for maps, videos, and external content.',
      visual: 'iframe-demo',
      interactive: { type: 'iframe-builder' }
    },
    quiz: []
  },
  {
    id: 'html-canvas',
    track: TRACKS.HTML,
    unit: 5,
    unitName: 'Media',
    title: 'Canvas',
    icon: '🎨',
    difficulty: DIFFICULTY.ADVANCED,
    xp: 30,
    description: 'Draw graphics with the HTML5 Canvas element.',
    type: 'visual-interactive',
    content: {
      theory: 'The <canvas> element provides a drawing surface. You use JavaScript to draw shapes, text, and images.',
      visual: 'canvas-demo',
      interactive: { type: 'canvas-painter' }
    },
    quiz: []
  },
  {
    id: 'html-accessibility',
    track: TRACKS.HTML,
    unit: 6,
    unitName: 'Accessibility',
    title: 'Accessibility (A11y)',
    icon: '♿',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Make your HTML accessible to everyone.',
    type: 'concept',
    content: {
      theory: 'Accessibility means making web content usable by people with disabilities. Key: alt text, ARIA roles, proper heading structure, label elements.',
      visual: 'a11y-checklist',
      interactive: { type: 'a11y-fixer' }
    },
    quiz: []
  },
];

// ─── CSS LESSONS ─────────────────────────────────────────────────────────────
export const cssLessons = [
  {
    id: 'css-intro',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'What is CSS?',
    icon: '🎨',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 10,
    description: 'Style your HTML with CSS.',
    type: 'visual-interactive',
    content: {
      theory: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML. It selects elements and applies style rules.',
      visual: 'css-magic',
      interactive: { type: 'before-after-toggle' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What does CSS stand for?',
        options: ['Creative Style System', 'Cascading Style Sheets', 'Color & Style Syntax', 'Computer Style Script'],
        answer: 1,
        explanation: 'CSS = Cascading Style Sheets — it styles the look of HTML elements.'
      }
    ]
  },
  {
    id: 'css-selectors',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'Selectors',
    icon: '🎯',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Target elements precisely with CSS selectors.',
    type: 'visual-interactive',
    content: {
      theory: 'Selectors target HTML elements. Types: element (p), class (.box), ID (#header), attribute ([type="text"]), pseudo-class (:hover).',
      visual: 'selector-target',
      interactive: { type: 'selector-game' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which selector targets elements with class="box"?',
        options: ['#box', '.box', 'box', '*box'],
        answer: 1,
        explanation: 'Classes use a dot prefix: .box targets all elements with class="box".'
      }
    ]
  },
  {
    id: 'css-colors',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'Colors',
    icon: '🌈',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Apply colors with names, hex, RGB, and HSL.',
    type: 'visual-interactive',
    content: {
      theory: 'CSS supports: named colors (red), hex (#ff0000), rgb(255,0,0), hsl(0,100%,50%), and modern oklch().',
      visual: 'color-formats',
      interactive: { type: 'color-mixer' }
    },
    quiz: []
  },
  {
    id: 'css-box-model',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'The Box Model',
    icon: '📦',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 25,
    description: 'Master padding, border, margin, and content.',
    type: 'visual-interactive',
    content: {
      theory: 'Every HTML element is a box with: content, padding (inside space), border, and margin (outside space).',
      visual: 'box-model-3d',
      interactive: { type: 'box-model-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which part of the box model creates space INSIDE the border?',
        options: ['margin', 'padding', 'content', 'gap'],
        answer: 1,
        explanation: 'Padding is the space between content and border. Margin is outside the border.'
      }
    ]
  },
  {
    id: 'css-typography',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'Typography',
    icon: '🔤',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Style text with fonts, size, weight, and spacing.',
    type: 'visual-interactive',
    content: {
      theory: 'CSS typography: font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-decoration.',
      visual: 'typography-playground',
      interactive: { type: 'text-styler' }
    },
    quiz: []
  },
  {
    id: 'css-display',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'Display Property',
    icon: '👁️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Control how elements are displayed.',
    type: 'visual-interactive',
    content: {
      theory: 'display controls the layout behavior: block (full width), inline (in-line with text), inline-block, none (hidden), flex, grid.',
      visual: 'display-types',
      interactive: { type: 'display-switcher' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which display value hides an element completely?',
        options: ['display: hidden', 'display: none', 'display: invisible', 'display: off'],
        answer: 1,
        explanation: 'display: none removes the element from layout entirely (unlike visibility: hidden).'
      }
    ]
  },
  {
    id: 'css-flexbox',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'Flexbox',
    icon: '🔀',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 35,
    description: 'Build flexible, responsive layouts with Flexbox.',
    type: 'visual-interactive',
    content: {
      theory: 'Flexbox is a one-dimensional layout method. Set display: flex on a container to control children with justify-content, align-items, flex-wrap.',
      visual: 'flexbox-sandbox',
      interactive: { type: 'flexbox-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which property centers flex items horizontally?',
        options: ['align-items: center', 'justify-content: center', 'flex-center: true', 'text-align: center'],
        answer: 1,
        explanation: 'justify-content controls alignment on the main axis (horizontal by default).'
      }
    ]
  },
  {
    id: 'css-grid',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'CSS Grid',
    icon: '⊞',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 35,
    description: 'Create two-dimensional layouts with CSS Grid.',
    type: 'visual-interactive',
    content: {
      theory: 'CSS Grid is a two-dimensional layout system. Define rows and columns with grid-template-columns and grid-template-rows.',
      visual: 'grid-sandbox',
      interactive: { type: 'grid-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which value creates 3 equal columns in CSS Grid?',
        options: ['grid-columns: 3', 'grid-template-columns: 1fr 1fr 1fr', 'columns: equal 3', 'grid-cols: 3'],
        answer: 1,
        explanation: 'grid-template-columns: 1fr 1fr 1fr creates three equal fractional columns.'
      }
    ]
  },
  {
    id: 'css-position',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'Positioning',
    icon: '📍',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Position elements with static, relative, absolute, fixed, sticky.',
    type: 'visual-interactive',
    content: {
      theory: 'position: static (default), relative (offset from normal), absolute (relative to parent), fixed (relative to viewport), sticky (hybrid).',
      visual: 'position-demo',
      interactive: { type: 'position-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which position value stays fixed when you scroll?',
        options: ['position: absolute', 'position: static', 'position: fixed', 'position: locked'],
        answer: 2,
        explanation: 'position: fixed positions the element relative to the viewport — it stays put when scrolling.'
      }
    ]
  },
  {
    id: 'css-responsive',
    track: TRACKS.CSS,
    unit: 3,
    unitName: 'Responsive Design',
    title: 'Media Queries',
    icon: '📱',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Make designs respond to different screen sizes.',
    type: 'visual-interactive',
    content: {
      theory: 'Media queries apply CSS conditionally based on viewport width, height, orientation, etc.',
      visual: 'responsive-preview',
      interactive: { type: 'media-query-lab' }
    },
    quiz: []
  },
  {
    id: 'css-variables',
    track: TRACKS.CSS,
    unit: 3,
    unitName: 'Responsive Design',
    title: 'CSS Variables',
    icon: '🔧',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Use custom properties to manage values.',
    type: 'visual-interactive',
    content: {
      theory: 'CSS Custom Properties (variables) store reusable values: --primary-color: #3b82f6; and use with var(--primary-color).',
      visual: 'variables-demo',
      interactive: { type: 'theme-builder' }
    },
    quiz: []
  },
  {
    id: 'css-transitions',
    track: TRACKS.CSS,
    unit: 4,
    unitName: 'Animations',
    title: 'Transitions',
    icon: '✨',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Smooth state changes with CSS transitions.',
    type: 'visual-interactive',
    content: {
      theory: 'transition: property duration timing-function delay; creates smooth animations between CSS states.',
      visual: 'transition-playground',
      interactive: { type: 'transition-lab' }
    },
    quiz: []
  },
  {
    id: 'css-animations',
    track: TRACKS.CSS,
    unit: 4,
    unitName: 'Animations',
    title: 'Keyframe Animations',
    icon: '🎬',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Create complex animations with @keyframes.',
    type: 'visual-interactive',
    content: {
      theory: '@keyframes defines animation steps. animation property applies it: name, duration, iteration-count, direction.',
      visual: 'keyframe-theater',
      interactive: { type: 'animation-builder' }
    },
    quiz: []
  },
  {
    id: 'css-transforms',
    track: TRACKS.CSS,
    unit: 4,
    unitName: 'Animations',
    title: 'Transforms',
    icon: '🔄',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Rotate, scale, skew, and translate elements.',
    type: 'visual-interactive',
    content: {
      theory: 'transform: translate(), scale(), rotate(), skew(), and matrix(). Can be combined.',
      visual: 'transform-playground',
      interactive: { type: 'transform-lab' }
    },
    quiz: []
  },
  {
    id: 'css-pseudo',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'Pseudo-classes & Pseudo-elements',
    icon: '👻',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Style elements based on state and position.',
    type: 'visual-interactive',
    content: {
      theory: 'Pseudo-classes (:hover, :focus, :nth-child) target element states. Pseudo-elements (::before, ::after) create virtual elements.',
      visual: 'pseudo-demo',
      interactive: { type: 'pseudo-lab' }
    },
    quiz: []
  },
  {
    id: 'css-specificity',
    track: TRACKS.CSS,
    unit: 1,
    unitName: 'CSS Foundations',
    title: 'Specificity & Cascade',
    icon: '⚖️',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Understand which CSS rules win conflicts.',
    type: 'visual-interactive',
    content: {
      theory: 'The cascade determines which rules apply. Specificity score: inline styles > IDs > classes > elements. !important overrides all.',
      visual: 'specificity-calculator',
      interactive: { type: 'specificity-game' }
    },
    quiz: []
  },
  {
    id: 'css-shadows',
    track: TRACKS.CSS,
    unit: 5,
    unitName: 'Visual Effects',
    title: 'Shadows & Gradients',
    icon: '🌅',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Add depth with shadows and beauty with gradients.',
    type: 'visual-interactive',
    content: {
      theory: 'box-shadow and text-shadow add depth. linear-gradient(), radial-gradient(), conic-gradient() create color gradients.',
      visual: 'shadow-gradient-lab',
      interactive: { type: 'shadow-builder' }
    },
    quiz: []
  },
  {
    id: 'css-border-radius',
    track: TRACKS.CSS,
    unit: 5,
    unitName: 'Visual Effects',
    title: 'Border & Border Radius',
    icon: '⬜',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Create shapes and rounded corners.',
    type: 'visual-interactive',
    content: {
      theory: 'border shorthand: width style color. border-radius rounds corners. 50% makes a circle.',
      visual: 'border-shapes',
      interactive: { type: 'shape-builder' }
    },
    quiz: []
  },
  {
    id: 'css-overflow',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'Overflow',
    icon: '💧',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Control content that exceeds its container.',
    type: 'visual-interactive',
    content: {
      theory: 'overflow: visible (default), hidden, scroll, auto. Controls what happens when content overflows its box.',
      visual: 'overflow-demo',
      interactive: { type: 'overflow-lab' }
    },
    quiz: []
  },
  {
    id: 'css-z-index',
    track: TRACKS.CSS,
    unit: 2,
    unitName: 'Layout',
    title: 'Z-Index & Stacking',
    icon: '🗂️',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Control which elements appear on top.',
    type: 'visual-interactive',
    content: {
      theory: 'z-index controls the stacking order of positioned elements. Higher values appear on top. Stacking context is created by positioned elements.',
      visual: 'z-index-layers',
      interactive: { type: 'stacking-lab' }
    },
    quiz: []
  },
];

// ─── JAVASCRIPT LESSONS ───────────────────────────────────────────────────────
export const jsLessons = [
  {
    id: 'js-intro',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'What is JavaScript?',
    icon: '⚡',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 10,
    description: 'Make web pages interactive with JavaScript.',
    type: 'concept',
    content: {
      theory: 'JavaScript (JS) is the programming language of the web. It makes pages interactive and dynamic.',
      visual: 'js-role',
      interactive: { type: 'click-demo' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Where can JavaScript run?',
        options: ['Only in Chrome', 'Only on servers', 'In any browser', 'Only on Windows'],
        answer: 2,
        explanation: 'JavaScript runs in all modern browsers and also on servers (Node.js).'
      }
    ]
  },
  {
    id: 'js-variables',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Variables',
    icon: '📦',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Store data with let, const, and var.',
    type: 'visual-interactive',
    content: {
      theory: 'Variables store data. Use const for values that don\'t change, let for values that do. Avoid var (old syntax).',
      visual: 'variable-boxes',
      interactive: { type: 'variable-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which keyword creates a variable that CANNOT be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        answer: 2,
        explanation: 'const creates a constant — its value cannot be reassigned after declaration.'
      }
    ]
  },
  {
    id: 'js-data-types',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Data Types',
    icon: '🗃️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Explore strings, numbers, booleans, null, undefined.',
    type: 'visual-interactive',
    content: {
      theory: 'JS data types: string ("hello"), number (42), boolean (true/false), null, undefined, object, symbol, bigint.',
      visual: 'data-types-zoo',
      interactive: { type: 'type-identifier' }
    },
    quiz: []
  },
  {
    id: 'js-operators',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Operators',
    icon: '🔢',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Perform operations on values.',
    type: 'visual-interactive',
    content: {
      theory: 'Arithmetic: +,-,*,/,%. Comparison: ==,===,!=,>,<. Logical: &&, ||, !. Assignment: =, +=, -=.',
      visual: 'operator-demo',
      interactive: { type: 'calculator-build' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What does === check in addition to value equality?',
        options: ['Spelling', 'Type equality', 'Memory address', 'Nothing extra'],
        answer: 1,
        explanation: '=== checks both value AND type. 1 === "1" is false. 1 == "1" is true (loose equality).'
      }
    ]
  },
  {
    id: 'js-strings',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Strings',
    icon: '📝',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Work with text data in JavaScript.',
    type: 'visual-interactive',
    content: {
     theory: 'Strings are text. Use template literals (`Hello ${name}`), string methods: .length, .toUpperCase(), .slice(), .includes(), .split().',
      visual: 'string-methods',
      interactive: { type: 'string-lab' }
    },
    quiz: []
  },
  {
    id: 'js-arrays',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Arrays',
    icon: '📚',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 25,
    description: 'Store multiple values in ordered lists.',
    type: 'visual-interactive',
    content: {
      theory: 'Arrays store ordered collections: [1, 2, 3]. Methods: .push(), .pop(), .map(), .filter(), .find(), .forEach(), .reduce().',
      visual: 'array-visual',
      interactive: { type: 'array-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which method adds an item to the END of an array?',
        options: ['.add()', '.append()', '.push()', '.insert()'],
        answer: 2,
        explanation: '.push() adds items to the end. .unshift() adds to the beginning.'
      }
    ]
  },
  {
    id: 'js-objects',
    track: TRACKS.JS,
    unit: 1,
    unitName: 'JS Fundamentals',
    title: 'Objects',
    icon: '🗂️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 25,
    description: 'Store key-value pairs in objects.',
    type: 'visual-interactive',
    content: {
      theory: 'Objects store key-value pairs: { name: "Alice", age: 30 }. Access with dot notation (obj.name) or bracket notation (obj["name"]).',
      visual: 'object-visual',
      interactive: { type: 'object-builder' }
    },
    quiz: []
  },
  {
    id: 'js-conditionals',
    track: TRACKS.JS,
    unit: 2,
    unitName: 'Control Flow',
    title: 'If / Else',
    icon: '🔀',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 20,
    description: 'Make decisions in your code.',
    type: 'visual-interactive',
    content: {
      theory: 'if/else statements execute code based on conditions. else if adds more branches. Ternary: condition ? true : false.',
      visual: 'decision-tree',
      interactive: { type: 'if-else-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What runs when an if condition is false?',
        options: ['The if block runs anyway', 'Nothing runs', 'The else block runs', 'An error occurs'],
        answer: 2,
        explanation: 'The else block runs when the if condition evaluates to false.'
      }
    ]
  },
  {
    id: 'js-switch',
    track: TRACKS.JS,
    unit: 2,
    unitName: 'Control Flow',
    title: 'Switch Statements',
    icon: '🔁',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 15,
    description: 'Handle multiple conditions cleanly.',
    type: 'visual-interactive',
    content: {
      theory: 'switch evaluates an expression and matches against case values. Don\'t forget break! default handles unmatched values.',
      visual: 'switch-demo',
      interactive: { type: 'switch-lab' }
    },
    quiz: []
  },
  {
    id: 'js-loops',
    track: TRACKS.JS,
    unit: 2,
    unitName: 'Control Flow',
    title: 'Loops',
    icon: '🔄',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 25,
    description: 'Repeat code with for, while, and for...of loops.',
    type: 'visual-interactive',
    content: {
      theory: 'for loop: known iterations. while: condition-based. for...of: iterates arrays. for...in: iterates object keys. forEach: array method.',
      visual: 'loop-visualizer',
      interactive: { type: 'loop-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which loop is BEST for iterating over an array\'s items?',
        options: ['while', 'for...in', 'for...of', 'do...while'],
        answer: 2,
        explanation: 'for...of is the modern, clean way to loop over array values directly.'
      }
    ]
  },
  {
    id: 'js-functions',
    track: TRACKS.JS,
    unit: 3,
    unitName: 'Functions',
    title: 'Functions',
    icon: '⚙️',
    difficulty: DIFFICULTY.BEGINNER,
    xp: 30,
    description: 'Reusable blocks of code.',
    type: 'visual-interactive',
    content: {
      theory: 'Functions are reusable code blocks. Define with function keyword or arrow syntax. Parameters receive input, return sends output.',
      visual: 'function-machine',
      interactive: { type: 'function-lab' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'What is the arrow function syntax in modern JS?',
        options: ['function() {}', '() => {}', '=> {}', 'fn() {}'],
        answer: 1,
        explanation: '() => {} is the arrow function syntax. Shorter and doesn\'t bind its own this.'
      }
    ]
  },
  {
    id: 'js-scope',
    track: TRACKS.JS,
    unit: 3,
    unitName: 'Functions',
    title: 'Scope & Closures',
    icon: '🔒',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Understand variable visibility and closures.',
    type: 'visual-interactive',
    content: {
      theory: 'Scope determines where variables are accessible: global, function, block. Closures allow inner functions to access outer variables.',
      visual: 'scope-bubbles',
      interactive: { type: 'scope-explorer' }
    },
    quiz: []
  },
  {
    id: 'js-dom',
    track: TRACKS.JS,
    unit: 4,
    unitName: 'DOM',
    title: 'The DOM',
    icon: '🌳',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Access and manipulate web page elements.',
    type: 'visual-interactive',
    content: {
      theory: 'The Document Object Model (DOM) represents HTML as a tree of objects. JavaScript can read, change, add, and delete elements.',
      visual: 'dom-tree',
      interactive: { type: 'dom-explorer' }
    },
    quiz: [
      {
        type: 'multiple-choice',
        question: 'Which method selects a single element by its ID?',
        options: ['document.querySelector()', 'document.getElement()', 'document.getElementById()', 'document.find()'],
        answer: 2,
        explanation: 'getElementById("myId") returns one element with that ID. querySelector("#myId") does the same with CSS selector syntax.'
      }
    ]
  },
  {
    id: 'js-events',
    track: TRACKS.JS,
    unit: 4,
    unitName: 'DOM',
    title: 'Events',
    icon: '🖱️',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 30,
    description: 'Respond to user actions with event listeners.',
    type: 'visual-interactive',
    content: {
      theory: 'Events trigger when users interact: click, keydown, input, submit, mouseover. Use addEventListener() to respond.',
      visual: 'event-playground',
      interactive: { type: 'event-lab' }
    },
    quiz: []
  },
  {
    id: 'js-async',
    track: TRACKS.JS,
    unit: 5,
    unitName: 'Async JS',
    title: 'Async & Promises',
    icon: '⏳',
    difficulty: DIFFICULTY.ADVANCED,
    xp: 35,
    description: 'Handle asynchronous operations with Promises.',
    type: 'visual-interactive',
    content: {
      theory: 'Promises represent future values. async/await makes async code look synchronous. fetch() returns a Promise for HTTP requests.',
      visual: 'async-timeline',
      interactive: { type: 'promise-lab' }
    },
    quiz: []
  },
  {
    id: 'js-fetch',
    track: TRACKS.JS,
    unit: 5,
    unitName: 'Async JS',
    title: 'Fetch API',
    icon: '🌐',
    difficulty: DIFFICULTY.ADVANCED,
    xp: 35,
    description: 'Make HTTP requests to APIs.',
    type: 'visual-interactive',
    content: {
      theory: 'fetch() makes HTTP requests and returns a Promise. Use with async/await. Response needs .json() to parse data.',
      visual: 'fetch-flow',
      interactive: { type: 'api-explorer' }
    },
    quiz: []
  },
  {
    id: 'js-classes',
    track: TRACKS.JS,
    unit: 6,
    unitName: 'OOP',
    title: 'Classes & OOP',
    icon: '🏛️',
    difficulty: DIFFICULTY.ADVANCED,
    xp: 35,
    description: 'Object-oriented programming with ES6 classes.',
    type: 'visual-interactive',
    content: {
      theory: 'Classes are blueprints for objects. constructor() initializes properties. Methods define behavior. extends enables inheritance.',
      visual: 'class-diagram',
      interactive: { type: 'class-builder' }
    },
    quiz: []
  },
  {
    id: 'js-modules',
    track: TRACKS.JS,
    unit: 6,
    unitName: 'OOP',
    title: 'Modules (import/export)',
    icon: '📦',
    difficulty: DIFFICULTY.ADVANCED,
    xp: 25,
    description: 'Organize code with ES modules.',
    type: 'concept',
    content: {
      theory: 'Modules split code into files. export makes values available. import brings them in. Default vs named exports.',
      visual: 'modules-diagram',
      interactive: { type: 'module-builder' }
    },
    quiz: []
  },
  {
    id: 'js-error-handling',
    track: TRACKS.JS,
    unit: 2,
    unitName: 'Control Flow',
    title: 'Error Handling',
    icon: '🚨',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 25,
    description: 'Handle errors gracefully with try/catch.',
    type: 'visual-interactive',
    content: {
      theory: 'try/catch catches runtime errors. finally always runs. throw creates custom errors. Error types: TypeError, ReferenceError, SyntaxError.',
      visual: 'error-flow',
      interactive: { type: 'error-lab' }
    },
    quiz: []
  },
  {
    id: 'js-localstorage',
    track: TRACKS.JS,
    unit: 5,
    unitName: 'Async JS',
    title: 'Local Storage',
    icon: '💾',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xp: 20,
    description: 'Persist data in the browser.',
    type: 'visual-interactive',
    content: {
      theory: 'localStorage stores key-value pairs persistently. .setItem(), .getItem(), .removeItem(), .clear(). JSON.stringify/parse for objects.',
      visual: 'storage-demo',
      interactive: { type: 'storage-lab' }
    },
    quiz: []
  },
];

// ─── COMBINED & HELPERS ───────────────────────────────────────────────────────
export const allLessons = [...htmlLessons, ...cssLessons, ...jsLessons];

export const getLessonById = (id) => allLessons.find(l => l.id === id);

export const getLessonsByTrack = (track) => allLessons.filter(l => l.track === track);

export const getUnitsByTrack = (track) => {
  const lessons = getLessonsByTrack(track);
  const units = {};
  lessons.forEach(l => {
    if (!units[l.unit]) units[l.unit] = { unitNum: l.unit, unitName: l.unitName, lessons: [] };
    units[l.unit].lessons.push(l);
  });
  return Object.values(units).sort((a, b) => a.unitNum - b.unitNum);
};

export const TRACK_META = {
  [TRACKS.HTML]: {
    name: 'HTML',
    fullName: 'HyperText Markup Language',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    icon: '🏗️',
    bg: '#fff7ed',
    ring: '#fed7aa',
    totalLessons: htmlLessons.length,
  },
  [TRACKS.CSS]: {
    name: 'CSS',
    fullName: 'Cascading Style Sheets',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    icon: '🎨',
    bg: '#eff6ff',
    ring: '#bfdbfe',
    totalLessons: cssLessons.length,
  },
  [TRACKS.JS]: {
    name: 'JS',
    fullName: 'JavaScript',
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308 0%, #f97316 100%)',
    icon: '⚡',
    bg: '#fefce8',
    ring: '#fef08a',
    totalLessons: jsLessons.length,
  },
};
