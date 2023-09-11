import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className='bg-veryDarkViolet text-center py-12'>

            <div className="custom__container mx-auto flex flex-col gap-10 items-center text-gray md:flex-row md:items-start md:justify-between">

                <Image src='/footer-logo.svg' width={150} height={150} alt='shortly logo' />

                <div className="flex flex-col gap-3 md:ml-36">
                    <div className='font-bold text-xl text-white mb-5'>Features</div>
                    <Link href={'/'}>Link Shortening</Link>
                    <Link href={'/'}>Branded Links</Link>
                    <Link href={'/'}>Analytics</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <div className='font-bold text-xl text-white mb-5'>Resources</div>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Developers</Link>
                    <Link href={'/'}>Supports</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <div className='font-bold text-xl text-white mb-5'>Company</div>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Our Team</Link>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Contact</Link>
                </div>

                <div className="flex flex-row gap-6">
                    <Image src='/icon-facebook.svg' width={30} height={30} alt='facebook logo' />
                    <Image src='/icon-twitter.svg' width={30} height={30} alt='twitter logo' />
                    <Image src='/icon-pinterest.svg' width={30} height={30} alt='pinterest logo' />
                    <Image src='/icon-instagram.svg' width={30} height={30} alt='instagram logo' />
                </div>

            </div>

        </section>
    )
}

export default Footer