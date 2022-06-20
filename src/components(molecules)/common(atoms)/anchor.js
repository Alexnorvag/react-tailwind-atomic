export const Anchor = ({ classes, children, ...props }) => (
  <a className={classes} {...props}>
    {children}
  </a>
);
