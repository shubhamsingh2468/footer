import Image from 'next/image'
import logo from  "../public/logo.jpeg"
const navigation = {
  navlinks: [
    { name: 'Home', href: 'Home' },
    { name:'solutions', href: 'solutions' },
    { name: 'services', href: 'services' },
    { name: 'aboutus', href: 'aboutus' },
    { name: 'contactus', href: 'contactus' },
    { name: 'employee', href: 'employee' },
  ],}

    
  
export default function Example() {
    return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
    <div className="space-y-8 xl:col-span-1">
      <Image
       className="h-10 w-auto sm:h-11 m-0"
              height={50}
              width={150}
              src={logo}
              alt=""
            />
            </div>
            </div>
            </div>
            <p className="text-gray-500 text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.navlinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-red-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </footer>
            )}
