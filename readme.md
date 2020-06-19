# gerador-estado-civil [![Build Status](https://travis-ci.org/bukinoshita/gerador-estado-civil.svg?branch=master)](https://travis-ci.org/bukinoshita/gerador-estado-civil)

> Gerador brasileiro de Estado Civil

## Install

```
$ yarn add gerador-estado-civil
```

## Usage

```ts
import { geradorEstadoCivil } from 'gerador-estado-civil'

geradorEstadoCivil()
// ~> Casado
```

## API

### geradorEstadoCivil()

Returns a `string` ([ESTADO_CIVIL](source/types/estado-civil.enum.ts)).

## Related

- [gerador](https://github.com/bukinoshita/gerador) — Gerador de dados brasileiros
- [gerador-nome](https://github.com/bukinoshita/gerador-nome) — Gerador brasileiro de nomes
- [gerador-sexo](https://github.com/bukinoshita/gerador-sexo) — Gerador brasileiro de Sexo da pessoa

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
