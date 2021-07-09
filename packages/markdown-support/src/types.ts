import unified from 'unified';

export type UnifiedPluginImport = Promise<{ default: unified.Plugin }>;
export type Plugin = string | [string, unified.Settings] | UnifiedPluginImport | [UnifiedPluginImport, unified.Settings];

export interface AstroMarkdownOptions {
  /** Path to file which exports components for `.mda` files */
  components: string;
  /** Enable or disable footnotes syntax extension */
  footnotes: boolean;
  /** Enable or disable GitHub-flavored Markdown syntax extension */
  gfm: boolean;
  remarkPlugins: Plugin[];
  rehypePlugins: Plugin[];
}

export interface MarkdownRenderingOptions extends Partial<AstroMarkdownOptions> {
  /** @internal */
  $?: {
    scopedClassName: string | null;
  };
}
