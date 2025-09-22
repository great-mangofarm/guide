import { useGuide } from '@/hooks/useGuide'

export const DebugGuideContext = () => {
  const { app, userType, isMangoAdmin, hasAccess, updateFromUrl } = useGuide()

  return (
    <div className="hidden fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm">
      <h3 className="text-sm font-semibold mb-2 text-foreground">🐛 Guide Context Debug</h3>
      
      <div className="space-y-2 text-xs">
        <div>
          <span className="font-medium text-muted-foreground">App:</span>
          <span className={`ml-2 px-2 py-1 rounded ${app ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
            {app || 'null'}
          </span>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">User Type:</span>
          <span className={`ml-2 px-2 py-1 rounded ${userType ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
            {userType || 'null'}
          </span>
        </div>
        
        <div>
          <span className="font-medium text-muted-foreground">Mango Admin:</span>
          <span className={`ml-2 px-2 py-1 rounded ${isMangoAdmin ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
            {isMangoAdmin ? 'YES (LOCKED)' : 'NO'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 space-y-1">
        <div className="text-xs text-muted-foreground">Access Check:</div>
        <div className="text-xs space-y-1">
          <div>EPC Admin: {hasAccess('epc', 'admin') ? '✅' : '❌'}</div>
          <div>EPC Company: {hasAccess('epc', 'company') ? '✅' : '❌'}</div>
        </div>
      </div>
      
      <button 
        onClick={updateFromUrl}
        className="mt-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/90"
      >
        Refresh
      </button>
      
      <div className="mt-2 text-xs text-muted-foreground">
        <div>URL: {window.location.pathname}</div>
        <div>Query: {window.location.search}</div>
        <div>Referrer: {document.referrer || 'none'}</div>
      </div>
    </div>
  )
}
