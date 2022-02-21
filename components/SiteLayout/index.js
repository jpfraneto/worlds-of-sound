const SiteLayout = ({ children }) => <div>{children}</div>;

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
