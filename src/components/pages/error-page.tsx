import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const style: object = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  return (
    <div id="error-page" style={style}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
      </p>
    </div>
  );
}
