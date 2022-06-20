import { css } from 'linaria/'
// import * as v from './variables';

export const reset = css`
  :global() {
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    font,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend {
      background: none repeat scroll 0 0;
      border: 0 none;
      margin: 0;
      outline: 0 none;
      padding: 0;
      vertical-align: baseline;
    }

    body {
      overflow-wrap: break-word;
      position: relative;
      -webkit-text-size-adjust: none;
      background-color: rgb(31, 31, 31);
      color: #fff;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }

    main {
      display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
    }

    table,
    caption,
    tbody,
    tfoot,
    thead {
      margin: 0;
      outline: 0 none;
      padding: 0;
    }

    th,
    td {
      background: none repeat scroll 0 0;
      margin: 0;
      outline: 0 none;
      padding: 0;
      vertical-align: top;
    }

    p,
    span,
    div {
      line-height: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;

      img {
        border: none;
        outline: 0 !important;
      }
    }

    a:hover {
      text-decoration: none;
    }

    button:focus {
      outline: 0 !important;
    }

    button:active {
      outline: none;
    }

    a,
    p,
    img,
    div {
      &:focus {
        outline: none;
      }
    }

    ol,
    ul {
      list-style: none outside none;
    }

    fieldset,
    img {
      vertical-align: bottom;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
      content: none;
    }

    ins {
      text-decoration: none;
    }

    del {
      text-decoration: line-through;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    br {
      letter-spacing: 0;
    }

    hr {
      border: 0 none;
      height: 0;
      visibility: hidden;
    }

    select,
    input,
    textarea {
      font-size: 99%;
    }

    pre,
    code {
      font: 100% monospace;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    input[type='submit'],
    input[type='text'],
    textarea {
      -webkit-appearance: none;
    }
  }
`
