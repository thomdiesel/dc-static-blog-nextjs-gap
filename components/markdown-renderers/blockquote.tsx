import theme from '../../common/styles/default/theme';

interface MarkdownBlockquoteProps {
  children: JSX.Element;
}

export const MarkdownBlockquote = ({ children }: MarkdownBlockquoteProps) => {
  return (
    <>
      <blockquote>{children}</blockquote>
      <style jsx>{`
        blockquote {
          color: ${theme.colors.mineShaft};
          padding: 10px;
          border-left: 2px solid ${theme.colors.radicalRed};
          margin: 25px;
        }

        blockquote :global(p) {
          color: ${theme.colors.mineShaft};
          margin: 0;
          font-size: 1.25rem;
          font-weight: ${theme.fonts.weight.light};
          line-height: 2rem;
          padding: 6px;
        }
      `}</style>
    </>
  );
};