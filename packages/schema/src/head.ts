import type { Base } from './base'
import type { Style } from './style'
import type { Script } from './script'
import type { Meta } from './meta'
import type { HtmlAttributes } from './html-attributes'
import type { BodyAttributes } from './body-attributes'
import type { Noscript } from './noscript'
import type { DataKeys, Default, Merge, MergeHead } from './types'
import type { Link } from './link'

export interface Head<E extends MergeHead = MergeHead> {
  /**
   * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
   * It only contains text; tags within the element are ignored.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   */
  title?: string
  /**
   * Generate the title from a template.
   */
  titleTemplate?: string | ((title?: string) => string)
  /**
   * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base?: Partial<Merge<E['base'], Base>>
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link?: (Link & DataKeys & Default<E['link']>)[]
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta?: (Meta & DataKeys & Default<E['meta']>)[]
  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style?: (Style & DataKeys & Default<E['style']>)[]
  /**
   * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script?: (Script & DataKeys & Default<E['script']>)[]
  /**
   * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
   * or if scripting is currently turned off in the browser.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
   */
  noscript?: (Noscript & DataKeys & Default<E['noscript']>)[]
  /**
   * Attributes for the <html> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  htmlAttrs?: (HtmlAttributes & DataKeys & Default<E['htmlAttrs']>)
  /**
   * Attributes for the <body> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
   */
  bodyAttrs?: (BodyAttributes & DataKeys & Default<E['bodyAttrs']>)
}

export const Head: Head = {}

