const Footer = (props) => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__copywrite'>
          &copy; {new Date().getFullYear()} All Rights Reserved?
        </div>
        <div className='footer__social-links'>
          <ul className='list--inline'>
            <li className='list__item'>
              <a href='https://www.facebook.com/keri.constantino' target='_blank'>facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
