# Contributing to Yemen Architecture Initiative

Thank you for helping preserve Yemen's architectural heritage. Every contribution matters.

## Ways to Contribute

### 1. Content contributions
- **Character card research** — Socotra, Al Mahrah, Raymah, and Sa'dah are the least documented
- **Kingdom archive entries** — Awsan and Ossan have almost no existing scholarship
- **YBC technical review** — architects and engineers reviewing chapter specifications
- **Photography** — licensed photographs of Yemeni heritage buildings
- **Translations** — French, German, Italian UI translations

### 2. Code contributions
- Bug fixes and accessibility improvements
- New sector pages (students.html, details.html, general.html)
- Performance optimisations

### 3. Research contributions
- Adding sources to the 51-item bibliography
- Academic paper submissions for the Students research library
- Oral history video documentation (master builders)

## Development Setup

```bash
git clone https://github.com/your-org/yemen-architecture-initiative.git
cd yemen-architecture-initiative
npx serve . -p 3000
# Open http://localhost:3000
```

## Code Standards

- No JavaScript frameworks — vanilla JS only
- WCAG AAA accessibility on all new UI
- Arabic RTL support required for all text elements
- Minimum 44×44px touch targets
- Test on: Chrome, Firefox, Safari, Edge + iOS Safari + Android Chrome

## Pull Request Process

1. Fork the repo and create a branch: `git checkout -b feature/your-feature`
2. Follow the design system tokens in MASTER.md
3. Test PWA install prompt and offline mode
4. Run Lighthouse audit — PWA score must remain 100
5. Submit PR with description of changes and screenshots

## Content Standards

All architectural content must be:
- Sourced from the YAI bibliography or new peer-reviewed sources
- Reviewed by at least one architect with Yemen experience
- Presented in both Arabic and English
- Respectful of the communities whose heritage is documented

## Contact

Open an issue for questions, or email: contribute@yai.org
