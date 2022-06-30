import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { provider, auth } from '../firebase'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
      <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
      <Title>Login to access your account</Title>
      <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen p-4
`
const SignInButton = tw.button`
mt-4 bg-gray-800 text-gray-100 py-3 rounded-md text-md
`
const UberLogo = tw.img`
    h-8 w-auto object-contain self-start my-8
`
const Title = tw.div`
    text-4xl text-gray-500 py-4
`
const HeadImage = tw.img`
    object-contain w-full
`