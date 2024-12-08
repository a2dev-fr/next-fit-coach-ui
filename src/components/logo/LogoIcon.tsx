import React from 'react';
import { cn } from '../../utils/cn';

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 350 103.92"
      className={cn("transition-transform duration-300", className)}
      aria-hidden="true"
    >
      <path 
        fill="currentColor" 
        d="M197.3 0q1.08 0 1.89.81T200 2.7v51.683q0 1.08-.81 1.89t-1.89.81h-6.788q-1.389 0-2.237-1.08L150.554 4.32q-.463-.617-.54-1.389t.27-1.465 1.003-1.08T152.714 0h6.788q.617 0 1.234.27t.926.81l27.076 36.795V2.7q0-1.08.771-1.89t1.929-.81h5.862zm-38.724 37.412q1.08 0 1.89.772t.81 1.928v14.27q0 1.08-.81 1.89t-1.89.81h-5.862q-1.08 0-1.89-.81t-.81-1.89v-14.27q0-1.157.81-1.928t1.89-.772h5.862zM22 77.012q.502 0 .879.377t.376.879v24.038q0 .502-.376.879t-.88.376h-3.157q-.646 0-1.04-.502L.258 79.021q-.216-.287-.251-.646t.125-.681.467-.503.663-.179H4.42q.287 0 .575.126t.43.376l12.593 17.114v-16.36q0-.503.359-.88t.897-.376H22zm-18.011 17.4q.502 0 .879.36t.377.896v6.638q0 .502-.377.879t-.88.376H1.263q-.502 0-.879-.376t-.376-.88v-6.637q0-.538.376-.897t.88-.358h2.726zm47.23 4.055q.537 0 .896.376t.359.915v2.62q0 .502-.359.878t-.897.377H33.495q-.503 0-.88-.377t-.376-.879v-2.619q0-.538.377-.915t.879-.376h17.723zm-17.724-5.561q-.503 0-.88-.377t-.376-.879v-2.69q0-.503.377-.88t.879-.377h16.109q.538 0 .915.377t.376.88v2.69q0 .502-.376.879t-.915.377h-16.11zm17.723-15.894q.538 0 .897.377t.359.879v2.619q0 .538-.359.915t-.897.376H33.495q-.503 0-.88-.376t-.376-.915v-2.62q0-.502.377-.878t.879-.377h17.723zm30.762 24.791q.215.287.25.646t-.107.682-.466.52-.682.197h-3.48q-.646 0-1.04-.502l-6.853-9.077-6.853 9.077q-.394.502-1.004.502h-3.516q-.359 0-.664-.179t-.448-.502q-.36-.754.107-1.364L75.81 77.514q.394-.502 1.004-.502h3.48q.36 0 .664.197t.485.52.143.682-.287.646l-8.431 10.979zM63.072 85.766l-5.166-6.709q-.251-.287-.287-.646t.143-.681.485-.52.663-.198h3.48q.288 0 .575.126t.43.376l5.059 6.71q.502.61.143 1.363-.143.323-.448.502t-.7.18h-3.372q-.287 0-.574-.126t-.43-.377zm27.712-8.754q.538 0 .915.377t.377.915v2.619q0 .538-.377.915t-.915.376H87.09q-.503 0-.88-.376t-.376-.915v-2.62q0-.538.377-.914t.879-.377h3.695zm16.037 0q.503 0 .88.377t.376.915v2.619q0 .538-.377.915t-.879.376H99.61v20.379q0 .502-.377.879t-.879.376h-2.762q-.538 0-.915-.376t-.377-.88V78.305q0-.539.377-.915t.915-.377h11.23zm35.584 10.979q.538 0 .915.376t.376.915v2.655q0 .502-.376.88t-.915.376H130.6v9.184q0 .503-.359.88t-.897.376h-2.726q-.503 0-.88-.377t-.376-.879V89.282q0-.538.377-.915t.879-.376h15.786zm1.614-10.979q.503 0 .88.377t.376.879v2.619q0 .538-.377.915t-.879.376h-17.4q-.503 0-.88-.376t-.376-.915v-2.62q0-.502.377-.878t.879-.377h17.4zm12.177 10.656q.538 0 .897.376t.359.915v13.418q0 .503-.359.88t-.897.376h-2.727q-.502 0-.879-.377t-.376-.879V88.96q0-.538.376-.915t.88-.376h2.726zm0-10.656q.538 0 .897.377t.359.879v6.637q0 .538-.359.915t-.897.377h-2.727q-.502 0-.879-.377t-.376-.915v-6.637q0-.503.376-.88t.88-.376h2.726zm12.787 0q.538 0 .915.377t.377.915v2.619q0 .538-.377.915t-.915.376h-3.695q-.503 0-.88-.376t-.376-.915v-2.62q0-.538.377-.914t.879-.377h3.695zm16.037 0q.503 0 .88.377t.376.915v2.619q0 .538-.377.915t-.879.376h-7.211v20.379q0 .502-.377.879t-.879.376h-2.762q-.539 0-.915-.376t-.377-.88V78.305q0-.539.377-.915t.915-.377h11.23zm31.78 5.13q-.466-.071-.77-.43t-.306-.825v-2.62q0-.61.43-.968t1.005-.287q3.086.502 5.49 2.188 3.121 2.26 4.413 5.992.215.61-.144 1.148t-1.04.538h-2.87q-.395 0-.718-.197t-.466-.556q-.79-1.866-2.404-2.978-1.256-.79-2.62-1.005zm9.078 11.912q.681 0 1.04.538t.144 1.148q-1.292 3.731-4.413 5.992-2.404 1.686-5.49 2.188h-.179q-.502 0-.825-.323-.43-.323-.43-.933v-2.619q0-.466.286-.825t.754-.43q1.507-.216 2.655-1.005 1.614-1.112 2.404-2.978.143-.359.466-.556t.718-.197h2.87zm-12.844-16.612q.466.36.466.97v2.798q0 .394-.27.735t-.663.484q-.502.108-.79.252-1.434.645-2.439 1.758-2.045 2.296-2.045 6.01t2.045 6.045q1.256 1.435 3.23 2.009.394.107.663.448t.269.736v2.834q0 .61-.466.969-.323.287-.826.287h-.25q-3.84-.826-6.495-3.732-3.408-3.839-3.408-9.579t3.408-9.58q2.655-2.941 6.494-3.695.574-.143 1.077.251zm31.73-.143q.43.359.43.969v2.69q0 .467-.269.808t-.735.448q-2.296.467-3.911 2.189-2.189 2.296-2.189 5.973t2.189 6.01q1.615 1.686 3.91 2.153.467.107.736.448t.27.807v2.691q0 .574-.431.969-.395.287-.825.287h-.216q-4.162-.682-7.14-3.767-3.73-3.84-3.73-9.562t3.73-9.633q2.907-3.014 7.14-3.731.574-.108 1.04.251zm11.265 3.48q3.732 3.91 3.732 9.633t-3.732 9.562q-2.978 3.085-7.14 3.767h-.215q-.43 0-.825-.287-.43-.395-.43-.969v-2.69q0-.467.269-.808t.735-.448q2.296-.467 3.91-2.153 2.19-2.332 2.19-6.01t-2.19-5.973q-1.614-1.722-3.91-2.189-.466-.107-.735-.448t-.27-.808v-2.69q0-.61.45-.969t1.022-.251q4.233.717 7.14 3.731zm34.816 21.096q.251.574-.126 1.166t-1.022.592h-23.895q-.323 0-.61-.161t-.43-.413q-.395-.574-.108-1.184l1.112-2.619q.144-.359.467-.574t.682-.215h16.719l-5.884-14.064-4.808 11.48q-.144.36-.448.557t-.7.197h-3.014q-.681 0-1.076-.574-.144-.251-.18-.574t.072-.61l7.283-17.078q.144-.359.449-.574t.7-.215h3.444q.394 0 .7.215t.448.574zm19.603-19.733q-.466-.071-.77-.43t-.306-.825v-2.62q0-.61.43-.968t1.005-.287q3.086.502 5.49 2.188 3.12 2.26 4.412 5.992.216.61-.143 1.148t-1.04.538h-2.87q-.395 0-.718-.197t-.467-.556q-.789-1.866-2.403-2.978-1.256-.79-2.62-1.005zm9.078 11.912q.681 0 1.04.538t.143 1.148q-1.291 3.731-4.412 5.992-2.404 1.686-5.49 2.188h-.18q-.501 0-.824-.323-.43-.323-.43-.933v-2.619q0-.466.286-.825t.754-.43q1.506-.216 2.655-1.005 1.614-1.112 2.403-2.978.144-.359.467-.556t.717-.197h2.87zM306.68 77.442q.467.36.467.97v2.798q0 .394-.27.735t-.663.484q-.502.108-.79.252-1.434.645-2.44 1.758-2.044 2.296-2.044 6.01t2.045 6.045q1.256 1.435 3.229 2.009.395.107.664.448t.269.736v2.834q0 .61-.467.969-.323.287-.825.287h-.251q-3.839-.826-6.494-3.732-3.408-3.839-3.408-9.579t3.408-9.58q2.655-2.941 6.494-3.695.574-.143 1.076.251zm22.582 8.755q-.503 0-.88-.377t-.376-.88v-6.672q0-.503.377-.88t.879-.376h2.726q.539 0 .897.377t.36.879v6.673q0 .502-.36.879t-.897.377h-2.726zm19.481-9.185q.503 0 .88.377t.376.879v24.11q0 .502-.377.878t-.879.377h-2.726q-.539 0-.897-.377t-.36-.879v-9.471h-11.516v9.471q0 .503-.359.88t-.897.376h-2.726q-.503 0-.88-.377t-.376-.879V88.96q0-.502.377-.879t.879-.377h15.499v-9.435q0-.503.359-.88t.897-.376h2.726z"
      />
    </svg>
  );
}