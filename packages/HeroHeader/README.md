# @butterwith/hero-header

A full-screen hero banner inspired by the title cards from Netflix's _We are the Champions_.

Built using [React](https://reactjs.org/) and [styled-components](https://styled-components.com/)

## Installation

```sh
> yarn add --dev @butterwith/hero-header
```

## Usage

```js
import HeroHeader from '@butterwith/hero-header';

render() {
  return (<HeroHeader img={path_to_img}
    title={"My Title}
    subtitle={"Subtitle text"} // optional subtitle
    color={"red"}
  />)
}
```
