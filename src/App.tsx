import React, { useState, useEffect } from 'react'
import {
	Heart,
	Calendar,
	MapPin,
	Phone,
	Mail,
	Camera,
	Music,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import FadeInOnScroll from './ui/ScrollOnView'

function App() {
	const [firstName, setFirstName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [status, setStatus] = useState('')
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const weddingDate = new Date('2025-06-15T14:00:00').getTime()

		const timer = setInterval(() => {
			const now = new Date().getTime()
			const distance = weddingDate - now

			setCountdown({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await emailjs.send(
				'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
				'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
				{
					from_name: firstName,
					phone_number: phoneNumber,
					to_email: 'your-email@example.com', // Replace with your email
				},
				'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
			)
			setStatus('Thank you! We will contact you soon.')
			setFirstName('')
			setPhoneNumber('')
		} catch {
			setStatus('Something went wrong. Please try again later.')
		}
	}

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<div
				className='h-screen bg-cover bg-center relative'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
				}}
			>
				<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
					<div className='text-center text-white'></div>
				</div>
			</div>

			<div className='max-w-4xl mx-auto py-14 px-4'>
				<div className='text-center pb-4 border-b border-black'>
					<FadeInOnScroll>
						<h2 className='text-4xl font-bold mb-8'>
							Дорогие родные и друзья,
						</h2>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className='text-gray-600 text-lg font-bold'>15 июня 2025 года</p>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className='text-gray-600 text-lg'>
							в этот день состоится одно из самых важных событий, которое мы
							хотим разделить с дорогими людьми - свадьба наших детей!
						</p>
					</FadeInOnScroll>
					<h2 className='text-4xl italic mt-4'>Арсен и Уулжан</h2>
					<FadeInOnScroll>
						<p className='text-gray-600 text-lg mt-6'>
							Приглашаем вас открыть вместе с нами новую страницу нашей жизни
						</p>
					</FadeInOnScroll>
				</div>

				<div className='text-center pt-6 pb-6 border-b border-black'>
					<FadeInOnScroll>
						<h2 className='text-4xl italic'>
							Место проведения свадебной церемонии
						</h2>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className='text-gray-600 text-lg mt-3'>
							ресторан Шератон, ул.Киевская 148B
						</p>
					</FadeInOnScroll>
					<div className='mt-2'>
						<FadeInOnScroll>
							<p className='text-gray-600 font-bold italic text-lg'>
								Дата: <span className='not-italic font-normal'>15.06.2025</span>
							</p>
						</FadeInOnScroll>
						<FadeInOnScroll>
							<p className='text-gray-600 font-bold italic text-lg'>
								Время: <span className='not-italic font-normal'>18:00</span>
							</p>
						</FadeInOnScroll>
					</div>
					<FadeInOnScroll>
						<p className='text-gray-600 text-lg mt-6'>
							Просим быть вовремя и не опаздывать
						</p>
					</FadeInOnScroll>
				</div>
				<div className='pt-6'>
					<p className='text-center text-2xl'>
						С нетерпением ждём встречи с Вами!
					</p>
				</div>
			</div>

			<div
				className='h-screen bg-cover bg-center relative'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
				}}
			>
				<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
					<div className='text-center text-white'></div>
				</div>
			</div>

			{/* Countdown Section */}
			<div className='bg-rose-50 py-16'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='text-center'>
						<h2 className='text-3xl font-bold mb-8'>
							Counting Down to Our Big Day
						</h2>
						<div className='grid grid-cols-4 gap-4'>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.days}
								</div>
								<div className='text-gray-600'>Дней</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.hours}
								</div>
								<div className='text-gray-600'>Часов</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.minutes}
								</div>
								<div className='text-gray-600'>Мин.</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.seconds}
								</div>
								<div className='text-gray-600'>Сек.</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Details Section */}
			<div className='max-w-4xl mx-auto py-20 px-4'>
				<div className='text-center mb-16'>
					<Heart className='w-12 h-12 mx-auto mb-4 text-rose-500' />
					<h2 className='text-4xl font-bold mb-8'>Our Special Day</h2>
					<p className='text-gray-600 text-lg'>
						Join us in celebrating our love story as we begin our journey
						together.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-12'>
					<div className='text-center'>
						<MapPin className='w-8 h-8 mx-auto mb-4 text-rose-500' />
						<h3 className='text-2xl font-semibold mb-2'>
							Ceremony & Reception
						</h3>
						<p className='text-gray-600'>
							The Grand Plaza Hotel
							<br />
							123 Wedding Lane
							<br />
							New York, NY 10001
						</p>
					</div>
					<div className='text-center'>
						<Calendar className='w-8 h-8 mx-auto mb-4 text-rose-500' />
						<h3 className='text-2xl font-semibold mb-2'>When</h3>
						<p className='text-gray-600'>
							June 15, 2025
							<br />
							Ceremony: 2:00 PM
							<br />
							Reception: 5:00 PM
						</p>
					</div>
				</div>
			</div>

			{/* Photography Section */}
			<div className='bg-gray-50 py-20'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='text-center mb-12'>
						<Camera className='w-12 h-12 mx-auto mb-4 text-rose-500' />
						<h2 className='text-4xl font-bold mb-4'>Capture the Moments</h2>
						<p className='text-gray-600'>
							Share your photos with us using our wedding hashtag
						</p>
						<p className='text-2xl font-bold text-rose-500 mt-4'>
							#SarahAndMichael2024
						</p>
					</div>
					<div className='grid grid-cols-3 gap-4'>
						<img
							src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
							alt='Wedding'
							className='rounded-lg shadow-md'
						/>
						<img
							src='https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
							alt='Wedding'
							className='rounded-lg shadow-md'
						/>
						<img
							src='https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
							alt='Wedding'
							className='rounded-lg shadow-md'
						/>
					</div>
				</div>
			</div>

			{/* Entertainment Section */}
			<div className='py-20'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='text-center mb-12'>
						<Music className='w-12 h-12 mx-auto mb-4 text-rose-500' />
						<h2 className='text-4xl font-bold mb-4'>Entertainment</h2>
						<p className='text-gray-600 mb-8'>
							Dance the night away with live music and entertainment
						</p>
						<div className='grid md:grid-cols-2 gap-8'>
							<div className='bg-white p-8 rounded-lg shadow-md'>
								<h3 className='text-2xl font-semibold mb-4'>Ceremony Music</h3>
								<p className='text-gray-600'>
									Classical string quartet performing your favorite romantic
									pieces
								</p>
							</div>
							<div className='bg-white p-8 rounded-lg shadow-md'>
								<h3 className='text-2xl font-semibold mb-4'>Reception Band</h3>
								<p className='text-gray-600'>
									Live band playing a mix of classic hits and modern favorites
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form */}
			<div className='bg-gray-50 py-20 px-4'>
				<div className='max-w-md mx-auto'>
					<div className='text-center mb-8'>
						<h2 className='text-3xl font-bold mb-4'>RSVP</h2>
						<p className='text-gray-600'>
							Please let us know if you'll be joining us on our special day.
						</p>
					</div>

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label
								htmlFor='firstName'
								className='block text-sm font-medium text-gray-700'
							>
								First Name
							</label>
							<input
								type='text'
								id='firstName'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='phoneNumber'
								className='block text-sm font-medium text-gray-700'
							>
								Phone Number
							</label>
							<input
								type='tel'
								id='phoneNumber'
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm'
								required
							/>
						</div>

						<button
							type='submit'
							className='w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-200'
						>
							Send RSVP
						</button>

						{status && (
							<p className='text-center text-sm mt-4 text-gray-600'>{status}</p>
						)}
					</form>
				</div>
			</div>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-8'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<div className='flex justify-center space-x-6 mb-4'>
						<Phone className='w-6 h-6' />
						<Mail className='w-6 h-6' />
					</div>
					<p className='text-gray-400'>We can't wait to celebrate with you!</p>
				</div>
			</footer>
		</div>
	)
}

export default App
