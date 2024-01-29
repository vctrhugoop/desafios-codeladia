import { Header } from './components/Header';

import { Play } from 'lucide-react';
import heroImage from './assets/ilustração.svg';

export function App() {
  return (
    <main className='min-h-screen bg-background bg-cover bg-center bg-no-repeat'>
      <div className='max-w-5xl mx-auto p-8'>
        <Header />
        <div className='lg:flex flex-row-reverse justify-between items-start lg:mt-36 mx-auto'>
          <div className='flex items-center justify-center mb-6 h-48 mt-16'>
            <img src={heroImage} className='lg:w-[574px]' />
          </div>
          <section className='text-zinc-100 max-w-md mx-auto lg:mx-0'>
            <span className='font-bold'>HAYAO MIYAZAKI</span>
            <h1 className='font-extrabold text-5xl mb-8'>
              A VIAGEM DE CHIHIRO
            </h1>
            <p className='font-medium leading-6 mb-10'>
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </p>
            <div className='flex flex-col w-full gap-8'>
              <button className='hover:bg-rose-200 bg-rose-300 item-center py-4 rounded uppercase text-zinc-950 font-bold text-lg flex justify-center gap-2'>
                <Play />
                assistir agora
              </button>
              <button className='hover:bg-rose-300/20 border-rose-300 border item-center py-4 rounded uppercase text-zinc-100 font-bold text-lg'>
                assista o trailer
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
