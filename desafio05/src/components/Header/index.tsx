import logoFaceBook from '../../assets/logo-facebook.svg';
import logoGoogle from '../../assets/logo-google.svg';
import logoInstagram from '../../assets/logo-instagram.svg';
import logoTwitter from '../../assets/logo-twitter.svg';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <header className='flex items-center justify-center md:justify-between'>
      <img src={logo} />
      <div className='items-center gap-6 hidden md:flex'>
        <a
          href='#'
          className='hover:bg-rose-300/20 p-2 bg-zinc-50/10 rounded-full border border-zinc-100 hover:border-rose-300'
        >
          <img src={logoGoogle} />
        </a>
        <a
          href='#'
          className='hover:bg-rose-300/20 p-2 bg-zinc-50/10 rounded-full border border-zinc-100 hover:border-rose-300'
        >
          <img src={logoFaceBook} />
        </a>
        <a
          href='#'
          className='hover:bg-rose-300/20 p-2 bg-zinc-50/10 rounded-full border border-zinc-100 hover:border-rose-300'
        >
          <img src={logoTwitter} />
        </a>
        <a
          href='#'
          className='hover:bg-rose-300/20 p-2 bg-zinc-50/10 rounded-full border border-zinc-100 hover:border-rose-300'
        >
          <img src={logoInstagram} />
        </a>
      </div>
    </header>
  );
}
