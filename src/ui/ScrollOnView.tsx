import { motion } from 'framer-motion'

const FadeInOnScroll: React.FC<{
	children: React.ReactNode
	direction?: 'left' | 'right' | 'top' | 'bottom'
}> = ({ children, direction = 'bottom' }) => {
	const variants = {
		left: { opacity: 0, x: -50 },
		right: { opacity: 0, x: 50 },
		top: { opacity: 0, y: -50 },
		bottom: { opacity: 0, y: 50 },
	}

	return (
		<motion.div
			initial={variants[direction]}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	)
}

export default FadeInOnScroll
