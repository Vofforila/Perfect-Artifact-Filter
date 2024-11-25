import PerfectArtefact from './artefacts'

export default function PagePerfectArtifacts() {
  return (
    // <CardThemed>
    //   <Suspense
    //     fallback={<Skeleton variant="rectangular" width="100%" height={1000} />}
    //   >
    //     <Routes>
    //       <Route path="*" element={<Navigate to="artifacts" replace />} />
    //     </Routes>
    //   </Suspense>
    <PerfectArtefact />
    // </CardThemed>
  )
}
