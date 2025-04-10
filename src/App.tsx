import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import FadeInOnScroll from './ui/ScrollOnView'
import 'react-phone-number-input/style.css'
import { Controller, useForm } from 'react-hook-form'
import { useIMask } from 'react-imask'

function App() {
	const [firstName, setFirstName] = useState('')
	const [attendance, setAttendance] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState('')
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})
	const inputRef = useRef<HTMLInputElement | null>(null)

	const { control, handleSubmit } = useForm<{ phoneNumber: string }>({
		defaultValues: {
			phoneNumber: phoneNumber,
		},
	})

	const mask = useIMask({
		mask: '+{996} 000 000 000',
		lazy: false,
		placeholderChar: '*',
	})

	const handleSubmitter = async (phoneNumber: string) => {
		setLoading(true)
		try {
			await emailjs.send(
				'service_yr9ppj9',
				'template_0x9ascb',
				{
					from_name: firstName,
					phone_number: phoneNumber,
					to_email: 'timurkamnev97@gmail.com',
					attendance: attendance,
				},
				'vzNIxSIYUzo7hv69l'
			)
			setStatus('Спасибо за ответ!')
			setFirstName('')
			setPhoneNumber('')
			setAttendance('')
		} catch {
			setStatus('Что-то пошло не так, попробуйте позже.')
		}
		setLoading(false)
	}

	const onSubmitForm = handleSubmit(data => {
		handleSubmitter(data.phoneNumber)
	})

	useEffect(() => {
		const weddingDate = new Date('2025-06-06T14:00:00').getTime()

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

			{/* Title page section */}
			<div className='max-w-4xl mx-auto py-14 px-4'>
				<div className='text-center pb-4 border-b border-black'>
					<h2 className='text-4xl font-bold mb-6 great-vibes-regular'>
						Дорогие <br />
						родные и друзья,
					</h2>
					<FadeInOnScroll>
						<p className='text-lg font-bold'>06 июня 2025 года</p>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className=' md:text-lg text-sm'>
							в этот день состоится одно из самых важных событий, которое мы
							хотим разделить с дорогими людьми - свадьба наших детей!
						</p>
					</FadeInOnScroll>
					<h2 className='text-4xl italic mt-3 great-vibes-regular'>
						Арсен & Уулжан
					</h2>
					<FadeInOnScroll>
						<p className='md:text-lg text-sm mt-6'>
							Приглашаем вас открыть вместе с нами новую страницу нашей жизни
						</p>
					</FadeInOnScroll>
				</div>

				<div className='text-center pt-8 pb-12 border-b border-black'>
					<FadeInOnScroll>
						<h2 className='text-4xl italic great-vibes-regular'>
							Место проведения
							<br /> свадебной церемонии
						</h2>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className='text-lg mt-3'>ресторан Ала-Тоо, ул.Малдыбаева 54/1</p>
					</FadeInOnScroll>
					<div className='mt-3'>
						<FadeInOnScroll>
							<p className='font-bold italic text-3xl great-vibes-regular'>
								Дата:{' '}
								<span className='not-italic font-normal font-serif text-base'>
									06.06.2025
								</span>
							</p>
						</FadeInOnScroll>
						<FadeInOnScroll>
							<p className='font-bold italic text-3xl great-vibes-regular pt-5'>
								Время:{' '}
								<span className='not-italic font-normal font-serif text-base'>
									18:00
								</span>
							</p>
						</FadeInOnScroll>
					</div>
					<FadeInOnScroll>
						<p className='text-lg mt-4'>Просим быть вовремя и не опаздывать</p>
					</FadeInOnScroll>
				</div>
				<FadeInOnScroll>
					<div className='pt-8'>
						<p className='text-center md:text-2xl text-lg'>
							С нетерпением ждём встречи с Вами!
						</p>
					</div>
				</FadeInOnScroll>
			</div>

			{/* Image */}
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
			<div className='bg-rose-50 py-20'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='text-center'>
						<h2 className='text-3xl mb-8'>До торжества осталось</h2>
						<div className='grid grid-cols-4 gap-4'>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md great-vibes-regular'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.days}
								</div>
								<div className='text-gray-600'>Дней</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md great-vibes-regular'>
								<div className='text-4xl font-bold text-rose-500 '>
									{countdown.hours}
								</div>
								<div className='text-gray-600'>Часов</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md great-vibes-regular'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.minutes}
								</div>
								<div className='text-gray-600'>Минут</div>
							</div>
							<div className='bg-white p-2 md:p-6 rounded-lg shadow-md great-vibes-regular'>
								<div className='text-4xl font-bold text-rose-500'>
									{countdown.seconds}
								</div>
								<div className='text-gray-600'>Секунд</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Details Section */}
			<div className='max-w-4xl mx-auto py-20 px-4'>
				<div className='text-center mb-12'>
					<FadeInOnScroll>
						<h2 className='text-4xl font-bold mb-4 great-vibes-regular'>
							Дорогие гости,
						</h2>
						<p className='text-lg'>мы с нетерпением ждем встречи с вами!</p>
					</FadeInOnScroll>
					<FadeInOnScroll>
						<p className='text-lg mt-4'>
							Что бы вы могли полностью насладиться праздником,{' '}
							<strong>мероприятие пройдёт в формате для взрослых</strong>
						</p>
					</FadeInOnScroll>
				</div>
				<FadeInOnScroll>
					<div>
						<p className='text-center text-lg'>
							Просим оставить детей дома
							<br /> надеемся на ваше понимание
						</p>
					</div>
				</FadeInOnScroll>
			</div>

			{/* Image */}
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

			{/* Contact Form */}
			<FadeInOnScroll>
				<div className='py-20 px-4'>
					<div className='max-w-md mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-7 great-vibes-regular'>
								Пожалуйста подтвердите <br /> ваше присутствие на нашем
								торжестве
							</h2>
							<p className=''>Будем ждать ответа до 01.06.2025</p>
						</div>

						<form
							onSubmit={onSubmitForm}
							className='space-y-6 bg-rose-50 p-5 rounded-xl'
						>
							<div>
								<label
									htmlFor='firstName'
									className='block text-base font-medium'
								>
									Имя
								</label>
								<input
									type='text'
									id='firstName'
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-3'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='phoneNumber'
									className='block text-base font-medium'
								>
									Номер телефона
								</label>
								{/* <PhoneInput
									defaultCountry='KG'
									placeholder='Введите номер телефона'
									value={phoneNumber}
									onChange={setPhoneNumber}
									required
								/> */}
								<Controller
									control={control}
									name='phoneNumber'
									rules={{
										required: true,
										minLength: 12,
									}}
									render={({ field }) => (
										<input
											className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-3'
											ref={el => {
												inputRef.current = el
												if (el) {
													mask.ref.current = el
												}
											}}
											name={field.name}
											onBlur={field.onBlur}
											id='phoneNumber'
											type='tel'
											onInput={() =>
												field.onChange({
													target: { value: mask.unmaskedValue },
												})
											}
											onChange={() =>
												field.onChange({
													target: { value: mask.unmaskedValue },
												})
											}
											value={mask.value || field.value}
											required
										/>
									)}
								/>
							</div>

							<div className='flex flex-col gap-3'>
								<div>
									<input
										name='chose'
										type='radio'
										value='Я с удовольствием приду'
										id='customRadioInline1'
										checked={attendance === 'Я с удовольствием приду'}
										onChange={e => setAttendance(e.target.value)}
										required
									/>
									<label className='pl-3' htmlFor='customRadioInline1'>
										Я с удовольствием приду
									</label>
								</div>
								<div>
									<input
										name='chose'
										type='radio'
										value='К сожалению, не смогу присутствовать'
										id='customRadioInline2'
										checked={
											attendance === 'К сожалению, не смогу присутствовать'
										}
										onChange={e => setAttendance(e.target.value)}
									/>
									<label className='pl-3' htmlFor='customRadioInline2'>
										К сожалению, не смогу присутствовать
									</label>
								</div>
							</div>

							<button
								type='submit'
								disabled={loading}
								className='w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-200'
							>
								{loading ? 'Отправка...' : 'Отправить'}
							</button>

							{status && (
								<p className='text-center text-lg mt-4 text-gray-600'>
									{status}
								</p>
							)}
						</form>
					</div>
				</div>
			</FadeInOnScroll>

			{/* highness */}
			<div className='pb-6'>
				<h1 className='text-center text-3xl italic great-vibes-regular'>
					С уважением Арсен и Уулжан
				</h1>
			</div>

			{/* Image */}
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

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-8'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<div className='flex justify-center space-x-6 mb-4'>
						<Phone className='w-6 h-6' />
						<Mail className='w-6 h-6' />
					</div>
					<p className='text-2xl great-vibes-regular'>
						Ждем не дождемся отпраздновать с вами!
					</p>
				</div>
			</footer>
		</div>
	)
}

export default App
