import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden max-w-prose mx-auto flex flex-col gap-6">
        
            
            <p className="text-white">
              In order for Docker to bundle your Tailwind correctly, review the @import for tailwindcss on{' '}
              <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
                /src/styles.css
              </code>
            </p>
            <h2 className="text-white text-2xl font-bold">
              Why?
            </h2>
            <p className="text-white">
              Just a basic understanding, but from what I can gather is hat Tailwind V4 scans for class usage and how Dockers build context differs from local file system context. If unset/unmatched, you will not notice the problem locally in dev or prod, but you will when it's built in Docker.
            </p>
            <h2 className="text-white text-2xl font-bold">
              How do I know if it's working?
            </h2>
         <p className="text-white">
              You should see a 404 error for a CSS file in your browser dev tools network tab when running in Docker if it's not working, and FOUC (flash of unstyled content) on initial load.
            </p>
            <h2 className="text-white text-2xl font-bold">
              Resolution
            </h2>
         <p className="text-white">
              It entirely depends on how your project is structured. In this example, our `styles.css` is located within the `src` folder, so we need to specify that in the @import statement for Tailwind to be able to find it when building in Docker: <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
                @import "tailwindcss" source("../src");
              </code>. Others had similar luck by adjusting it to just `source("../")`, depending on their structure.
            </p>
            <h2 className="text-white text-2xl font-bold">
              Examples
            </h2>
         <p className="text-white">
              <ul className='list-disc list-inside'>
                <li><a className='underline' href='https://github.com/tommerty/tailwind-source-example'>This project</a></li>
              <li><a className='underline' href='https://github.com/dorasto/ui'>Project I initially discovered it on (Repo)</a> - <a className='underline' href='https://ui.doras.to'>Website</a></li>
              </ul>
            </p>
      </section>

      
    </div>
  )
}
