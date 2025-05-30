export default function Profile({name, imageLink, alt}) {
  return (
    <div>
        <img className="inline-block h-9 w-auto rounded-full ring-2 ring-white" title={`profile-${name}`} src={imageLink} alt={alt} />
    </div>
  )
}
