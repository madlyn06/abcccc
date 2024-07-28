import React, { useContext } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox
} from '@material-tailwind/react'
import { FingerPrintIcon, UsersIcon } from '@heroicons/react/24/solid'
import { PageTitle, Footer } from '@/widgets/layout'
import { FeatureCard, TeamCard } from '@/widgets/cards'
import { featuresData, teamData, contactData } from '@/data'
import { AppContext } from '@/contexts/app.context'

export function Home() {
  const { isAuthenticated } = useContext(AppContext)
  return (
    <>
      <div className='relative flex h-screen content-center items-center justify-center pt-16 pb-32'>
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className='absolute top-0 h-full w-full bg-black/60 bg-cover bg-center' />
        <div className='max-w-8xl container relative mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='ml-auto mr-auto w-full px-4 text-center lg:w-8/12'>
              <Typography variant='h1' color='white' className='mb-6 font-black'>
                Story about my store.
              </Typography>
              <Typography variant='lead' color='white' className='opacity-80'>
                This is a store that sells quality sports goods that you can buy quickly and conveniently. See now here
                <IconButton size='sm' color='white' variant='text' className='ml-2'>
                  <a href='/product' className='fas fa-external-link-alt' /> {}
                </IconButton>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className='-mt-32 bg-white px-4 pb-20 pt-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: 'w-5 h-5 text-white'
                })}
                description={description}
              />
            ))}
          </div>
          <div className='mt-32 flex flex-wrap items-center'>
            <div className='mx-auto -mt-8 w-full px-4 md:w-5/12'>
              <Typography variant='h3' className='mb-3 font-bold' color='blue-gray'>
                Gear Up for Greatness: Your One-Stop Shop for Sports and Fitnesss
              </Typography>
              <Typography className='mb-8 font-normal text-blue-gray-500'>
                Our online sports store offers an intuitive interface with interactive product descriptions and images,
                allowing customers to easily explore our vast selection of athletic gear. We have curated collections
                for various sports and activities to help you find the perfect equipment tailored to your needs.
                <br />
                <br />
                Whether you're a seasoned athlete or a casual enthusiast, our shop provides everything you need to
                enhance your performance and enjoy your favorite sports.
              </Typography>
              <Button variant='filled'>
                <a href='/home'>read more</a>
              </Button>
            </div>
            <div className='mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0'>
              <Card className='shadow-lg border shadow-gray-500/10 rounded-lg'>
                <CardHeader floated={false} className='relative h-56'>
                  <img alt='Card Image' src='/img/shoe.png' className='h-full w-full' />
                </CardHeader>
                <CardBody>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    Shop
                  </Typography>
                  <Typography variant='h5' color='blue-gray' className='mb-3 mt-2 font-bold'>
                    Top Reputation
                  </Typography>
                  <Typography className='font-normal text-blue-gray-500'>
                    Our commitment to quality and innovation is unwavering, just like the enduring cycle of the Arctic
                    Ocean. We constantly strive to bring you the latest advancements in sports technology and apparel,
                    ensuring your performance remains at its peak, no matter the season.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-white py-24 px-4'>
        <div className='container mx-auto'>
          <PageTitle section='Co-Working' heading='Build something'>
            Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National
            Oceanic and Atmospheric Administration, Ted, Scambos.
          </PageTitle>
          <div className='mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
            {contactData.map(({ title, icon, description }) => (
              <Card key={title} color='transparent' shadow={false} className='text-center text-blue-gray-900'>
                <div className='mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20'>
                  {React.createElement(icon, {
                    className: 'w-5 h-5 text-white'
                  })}
                </div>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  {title}
                </Typography>
                <Typography className='font-normal text-blue-gray-500'>{description}</Typography>
              </Card>
            ))}
          </div>
          <PageTitle section='Contact Us' heading='Want to work with us?'>
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className='mx-auto w-full mt-12 lg:w-5/12'>
            <div className='mb-8 flex gap-8'>
              <Input variant='outlined' size='lg' label='Full Name' />
              <Input variant='outlined' size='lg' label='Email Address' />
            </div>
            <Textarea variant='outlined' size='lg' label='Message' rows={8} />
            <Checkbox
              label={
                <Typography variant='small' color='gray' className='flex items-center font-normal'>
                  I agree the
                  <a href='#' className='font-medium transition-colors hover:text-gray-900'>
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button variant='gradient' size='lg' className='mt-8' fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className='bg-white'>
        <Footer />
      </div>
    </>
  )
}

export default Home
