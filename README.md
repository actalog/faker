# @actalog/faker

[![CI](https://github.com/actalog/faker/actions/workflows/ci.yml/badge.svg)](https://github.com/actalog/faker/actions/workflows/ci.yml)
[![CD](https://github.com/actalog/faker/actions/workflows/cd.yml/badge.svg)](https://github.com/actalog/faker/actions/workflows/cd.yml)

Generates fake data in your GitHub workflows

```yml
jobs:
  faker:
    name: Faker
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - id: email
        uses: actalog/faker@v1
        with:
          module: 'internet'
          method: 'email'
      - run: echo ${{ steps.email.outputs.value }}
```
