import React from 'react';

export default function Form () {
    return (
        <></>
    )
}


// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function SignInForm({

//     onSubmit = async (data: any) => {
//         await new Promise((r) => setTimeout(r, 1000));
//         alert(JSON.stringify(data));
//     },
// }) {
//     const {
//         register,
//         handleSubmit,
//         formState: { isSubmitting, isDirty, errors }
//     } = useForm();

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor='name'>이름</label>
//             <input
//                 id='name'
//                 type='name'
//                 placeholder='언더독'
//                 aria-invalid={!isDirty ? undefined : errors.name ? 'true' : 'false'}
//                 {...register('name', {
//                     required: '이름은 필수 입력입니다.',
//                     minLength: {
//                         value: 3,
//                         message: '3자리 이상 이름을 사용하세요.'
//                     }
//                 })}
//             />
//             <label htmlFor='email'>이메일</label>
//             <input
//                 id='email'
//                 type='text'
//                 placeholder='underdog247@email.com'
//                 aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
//                 {...register('email', {
//                     required: '이메일은 필수 입력입니다.',
//                     pattern: {
//                         value: /\S+@\S+\.\S+/,
//                         message: '이메일 형식에 맞지 않습니다.'
//                     }
//                 })}
//                 />
//                 {errors.email && <small role='alert'>{errors.email.message}</small>}
//             <label htmlFor='password'>비밀번호</label>
//             <input
//                 id='password'
//                 type='password'
//                 placeholder='********'
//                 aria-invalid={!isDirty ? undefined: errors.password ? 'true' : 'false' }
//                     {...register('password', {
//                         required: '비밀번호는 필수 입력입니다.',
//                         minLength: {
//                             value: 8,
//                             message: '8자리 이상 비밀번호를 사용하세요.'
//                         }
//                 })}
//                 />
//                 {errors.password && <small role='alert'>{errors.password.message}</small>}
//             <label htmlFor='phone'>전화번호</label>
//             <input
//                 id='phone'
//                 type='phone'
//                 placeholder='010-1234-5678'
//                     {...register('phone', {
//                     required: '전화번호는 필수 입력입니다.'
//                 })}
//             />
//             <button type='submit' disabled={isSubmitting}>
//                 로그인
//             </button>
//         </form >
//     </>
//     );
// }